import jwt, {sign} from "jsonwebtoken";
import {JwtPayloadModel} from '../models/jwt-payload.model';
import {TeacherModel} from "../models/teacher.model";
import {teacherRepository} from "../repositories";
import {Model} from "sequelize";

export const tokenService = {
    generateTokens(userId: number) : { accessToken: string, refreshToken: string } {
        const accessToken = sign(
            { userId: userId },
            process.env.JWT_ACCESS_SECRET as string,
            { expiresIn: '30m' }
        );

        const refreshToken = sign(
            { userId: userId },
            process.env.JWT_REFRESH_SECRET as string,
            { expiresIn: '30d' }
        );

        return { accessToken, refreshToken };
    },

    async saveToken(userId: number, refreshToken: string) : Promise<TeacherModel | null> {
        await teacherRepository.update(userId, { refreshToken: refreshToken });
        const teacher: Model<TeacherModel> | null = await teacherRepository.getById(userId);
        return teacher ? teacher.toJSON() : null;
    },

    async removeToken(userId: number) : Promise<TeacherModel | null> {
        await teacherRepository.update(userId, { refreshToken: null });
        const teacher: Model<TeacherModel> | null = await teacherRepository.getById(userId);
        return teacher ? teacher.toJSON() : null;
    },

    async getToken(userId: number) : Promise<string | null> {
        const teacher: Model<TeacherModel> | null = await teacherRepository.getById(userId);
        return teacher ? teacher.toJSON().refreshToken : null;
    },

    validateAccessToken(token: string) : number | null {
        try {
            const user = jwt.verify(token, process.env.JWT_ACCESS_SECRET as string) as JwtPayloadModel;
            return user.userId;
        } catch (error) {
            return null;
        }
    },

    validateRefreshToken(token: string) : number | null {
        try {
            const user = jwt.verify(token, process.env.JWT_REFRESH_SECRET as string) as JwtPayloadModel;
            return user.userId;
        } catch (error) {
            return null;
        }
    }
};