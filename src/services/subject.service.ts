import {Model} from "sequelize";
import {subjectRepository, teacherRepository} from "../repositories";
import {SubjectModel, SubjectResponseModel} from "../models";
import {ApiError} from "../errors/api.error";

export const subjectService = {
    async getById(id: number): Promise<SubjectModel> {
        const subject: Model<SubjectModel> | null = await subjectRepository.getById(id);
        if (!subject) {
            throw ApiError.NotFoundError("Subject not found");
        }
        return subject.toJSON();
    },

    async create(data: SubjectModel): Promise<SubjectModel> {
        const teacher: Model<SubjectModel> = await subjectRepository.create(data);
        return teacher.toJSON();
    },

    async changeName(oldName: string, newName: string, teacherId: number): Promise<SubjectModel | null> {
        const subject: Model<SubjectModel> | null = await subjectRepository.getByAttribute({ name: oldName });
        if (!subject) {
            throw ApiError.NotFoundError("Subject not found");
        }
        if (subject.toJSON().teacherId !== teacherId) {
            throw ApiError.ForbiddenError();
        }
        await subjectRepository.changeName(oldName, newName);
        const newSubject: Model<SubjectModel> | null = await subjectRepository.getByAttribute({ name: newName });
        return newSubject ? newSubject.toJSON() : null;
    },

    async delete(subjectId: number, teacherId: number): Promise<boolean> {
        const subject: Model<SubjectModel> | null = await subjectRepository.getById(subjectId);
        if (!subject) {
            throw ApiError.NotFoundError("Subject not found");
        }
        if (subject.toJSON().teacherId !== teacherId) {
            throw ApiError.ForbiddenError();
        }

        const result = await subjectRepository.delete(subjectId);
        if (result == 0) {
            throw ApiError.NotFoundError("Subject not found");
        }

        return true;
    },

    async search(text: string): Promise<SubjectResponseModel[]> {
        let subjects: Model<SubjectModel>[] | null = await subjectRepository.search(text.toLowerCase());
        if (!subjects) {
            subjects = []
        }
        return await Promise.all(subjects.map(async element => {
            const teacher = await teacherRepository.getById(element.toJSON().teacherId)
            if (!teacher) {
                throw ApiError.NotFoundError("Teacher not found");
            }
            const res: SubjectResponseModel = {
                id: element.toJSON().id as number,
                name: element.toJSON().name,
                teacherName: teacher.toJSON().name
            }
            return res
        }))
    }
}