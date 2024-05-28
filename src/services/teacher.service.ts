import {TeacherModel} from "../models";
import {Model} from "sequelize";
import {teacherRepository} from "../repositories";

export const teacherService = {
    async getById(id: number): Promise<TeacherModel | null> {
        const teacher: Model<TeacherModel> | null = await teacherRepository.getById(id);
        return teacher ? teacher.toJSON() : null;
    },

    async create(data: TeacherModel): Promise<TeacherModel> {
        const teacher: Model<TeacherModel> = await teacherRepository.create(data);
        return teacher.toJSON();
    },

    async update(id: number, data: any): Promise<TeacherModel | null> {
        await teacherRepository.update(id, data);
        return this.getById(id);
    },

    async delete(id: number): Promise<number> {
        return teacherRepository.delete(id);
    }
}