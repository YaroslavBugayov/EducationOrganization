import {Model} from "sequelize";
import {subjectRepository} from "../repositories";
import {SubjectModel} from "../models";
import {ApiError} from "../errors/api.error";

export const subjectService = {
    async getById(id: number): Promise<SubjectModel | null> {
        const subject: Model<SubjectModel> | null = await subjectRepository.getById(id);
        return subject ? subject.toJSON() : null;
    },

    async create(data: SubjectModel): Promise<SubjectModel> {
        const teacher: Model<SubjectModel> = await subjectRepository.create(data);
        return teacher.toJSON();
    },

    async changeName(oldName: string, newName: string): Promise<SubjectModel | null> {
        const subject: Model<SubjectModel> | null = await subjectRepository.getByAttribute({ name: oldName });
        if (!subject) {
            throw ApiError.NotFoundError("Subject not found");
        }
        await subjectRepository.changeName(oldName, newName);
        const newSubject: Model<SubjectModel> | null = await subjectRepository.getByAttribute({ name: newName });
        return newSubject ? newSubject.toJSON() : null;
    },

    async delete(id: number): Promise<number> {
        return subjectRepository.delete(id);
    },

    async search(text: string): Promise<SubjectModel[]> {
        const subject: Model<SubjectModel>[] | null = await subjectRepository.search(text);
        return subject ? subject.map(element => element.toJSON()) : [];
    }
}