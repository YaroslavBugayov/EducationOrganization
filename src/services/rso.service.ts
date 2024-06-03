import {Model} from "sequelize";
import {rsoRepository, subjectRepository} from "../repositories";
import {RSOModel, SubjectModel} from "../models";
import {ApiError} from "../errors/api.error";

export const rsoService = {
    async getById(id: number): Promise<RSOModel> {
        const rso: Model<RSOModel> | null = await rsoRepository.getById(id);
        if (!rso) {
            throw ApiError.NotFoundError("RSO not found");
        }
        return rso.toJSON();
    },

    async create(data: RSOModel, teacherId: number): Promise<RSOModel> {
        const subject: Model<SubjectModel> | null = await subjectRepository.getById(data.subjectId);
        if (!subject) {
            throw ApiError.NotFoundError("Subject not found");
        }
        if (subject.toJSON().teacherId !== teacherId) {
            throw ApiError.ForbiddenError();
        }

        const rso: Model<RSOModel> = await rsoRepository.create(data);
        return rso.toJSON();
    },

    async delete(rsoId: number, teacherId: number): Promise<boolean> {
        const rso: Model<RSOModel> | null = await rsoRepository.getById(rsoId);
        if (!rso) {
            throw ApiError.NotFoundError("RSO not found");
        }
        const subject: Model<SubjectModel> | null = await subjectRepository.getById(rso.toJSON().subjectId);
        if (!subject) {
            throw ApiError.NotFoundError("Subject not found");
        }
        if (subject.toJSON().teacherId !== teacherId) {
            throw ApiError.ForbiddenError();
        }

        const result = await rsoRepository.delete(rsoId);
        if (result == 0) {
            throw ApiError.NotFoundError("RSO not found");
        }

        return true;
    },

    async getAllBySubjectId(subjectId: number): Promise<RSOModel[]> {
        const rsos: Model<RSOModel>[] | null = await rsoRepository.getAllBySubjectId(subjectId);
        return rsos ? rsos.map(element => element.toJSON()) : [];
    }
}