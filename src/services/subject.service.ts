import {Model} from "sequelize";
import {subjectRepository} from "../repositories";
import {SubjectModel} from "../models";

export const subjectService = {
    async getById(id: number): Promise<SubjectModel | null> {
        const subject: Model<SubjectModel> | null = await subjectRepository.getById(id);
        return subject ? subject.toJSON() : null;
    },

    async create(data: SubjectModel): Promise<SubjectModel> {
        const teacher: Model<SubjectModel> = await subjectRepository.create(data);
        return teacher.toJSON();
    },

    async update(id: number, data: any): Promise<SubjectModel | null> {
        await subjectRepository.update(id, data);
        return this.getById(id);
    },

    async delete(id: number): Promise<number> {
        return subjectRepository.delete(id);
    },

    async search(text: string): Promise<SubjectModel[]> {
        const subject: Model<SubjectModel>[] | null = await subjectRepository.search(text);
        return subject ? subject.map(element => element.toJSON()) : [];
    }
}