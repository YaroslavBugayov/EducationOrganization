import {TeacherModel} from "../models";
import {teacherRepository} from "../repositories";
import {Model} from "sequelize";
import {ApiError} from "../errors/api.error";
import {tokenService} from ".";

export const authService = {
    async login(login: string, password: string): Promise<{ refreshToken: string, accessToken: string, teacherModel: TeacherModel }> {
        const teacher: Model<TeacherModel> | null = await teacherRepository.getByAttribute({ login: login });
        if (!teacher) {
            throw ApiError.NotFoundError("Teacher not found");
        }

        const teacherModel = teacher!.toJSON();

        if (teacherModel.password !== password) {
            throw ApiError.BadRequest("Passwords do not match");
        }

        if (!teacherModel.id) {
            throw new ApiError(500, "Id not found");
        }

        const { accessToken, refreshToken } = tokenService.generateTokens(teacherModel.id);
        await tokenService.saveToken(teacherModel.id, refreshToken);
        return { refreshToken, accessToken, teacherModel }
    }
}