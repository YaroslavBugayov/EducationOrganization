import {Model} from "sequelize";
import {deadlineRepository, groupRepository, subjectRepository} from "../repositories";
import {DeadlineModel, GroupModel, SubjectModel} from "../models";
import {ApiError} from "../errors/api.error";

export const deadlineService = {
    async getById(id: number): Promise<DeadlineModel | null> {
        const deadline: Model<DeadlineModel> | null = await deadlineRepository.getById(id);
        return deadline ? deadline.toJSON() : null;
    },

    async create(deadlineDate: Date, groupName: string, subjectId: number, teacherId: number): Promise<DeadlineModel> {
        const subject: Model<SubjectModel> | null = await subjectRepository.getById(subjectId);
        if (!subject) {
            throw ApiError.NotFoundError("Subject not found");
        }
        if (subject.toJSON().teacherId !== teacherId) {
            throw ApiError.ForbiddenError();
        }
        const group: Model<GroupModel> | null = await groupRepository.getByAttribute({ name: groupName });
        if (!group) {
            throw ApiError.NotFoundError("Group not found");
        }
        const groupId = group.toJSON().id;
        const deadline: Model<DeadlineModel> = await deadlineRepository.create({ deadlineDate, groupId, subjectId });
        return deadline.toJSON();
    },

    async delete(deadlineId: number, teacherId: number): Promise<boolean> {
        const deadline: Model<DeadlineModel> | null = await deadlineRepository.getById(deadlineId);
        if (!deadline) {
            throw ApiError.NotFoundError("Info not found");
        }
        const subject: Model<SubjectModel> | null = await subjectRepository.getById(deadline.toJSON().subjectId);
        if (!subject) {
            throw ApiError.NotFoundError("Subject not found");
        }
        if (subject.toJSON().teacherId !== teacherId) {
            throw ApiError.ForbiddenError();
        }

        const result = await deadlineRepository.delete(deadlineId);
        if (result == 0) {
            throw ApiError.NotFoundError("Info not found");
        }

        return true;
    },

    async getAllBySubjectId(subjectId: number): Promise<DeadlineModel[]> {
        const deadlines: Model<DeadlineModel>[] | null = await deadlineRepository.getAllBySubjectId(subjectId);
        return deadlines ? deadlines.map(element => element.toJSON()) : [];
    }
}