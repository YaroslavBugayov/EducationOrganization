import {Model} from "sequelize";
import {infoRepository, subjectRepository} from "../repositories";
import {InfoModel, SubjectModel} from "../models";
import {ApiError} from "../errors/api.error";

export const infoService = {
    async getById(id: number): Promise<InfoModel | null> {
        const info: Model<InfoModel> | null = await infoRepository.getById(id);
        return info ? info.toJSON() : null;
    },

    async create(data: InfoModel, teacherId: number): Promise<InfoModel> {
        const subject: Model<SubjectModel> | null = await subjectRepository.getById(data.subjectId);
        if (!subject) {
            throw ApiError.NotFoundError("Subject not found");
        }
        if (subject.toJSON().teacherId !== teacherId) {
            throw ApiError.ForbiddenError();
        }

        const info: Model<InfoModel> = await infoRepository.create(data);
        return info.toJSON();
    },

    async delete(infoId: number, teacherId: number): Promise<boolean> {
        const info: Model<InfoModel> | null = await infoRepository.getById(infoId);
        if (!info) {
            throw ApiError.NotFoundError("Info not found");
        }
        const subject: Model<SubjectModel> | null = await subjectRepository.getById(info.toJSON().subjectId);
        if (!subject) {
            throw ApiError.NotFoundError("Subject not found");
        }
        if (subject.toJSON().teacherId !== teacherId) {
            throw ApiError.ForbiddenError();
        }

        const result = await infoRepository.delete(infoId);
        if (result == 0) {
            throw ApiError.NotFoundError("Info not found");
        }

        return true;
    },

    async getAllBySubjectId(subjectId: number): Promise<InfoModel[]> {
        const infos: Model<InfoModel>[] | null = await infoRepository.getAllBySubjectId(subjectId);
        return infos ? infos.map(element => element.toJSON()) : [];
    }
}