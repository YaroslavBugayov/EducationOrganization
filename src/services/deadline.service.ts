import {Model} from "sequelize";
import {deadlineRepository, groupRepository, subjectRepository} from "../repositories";
import {DeadlineModel, DeadlineResponseModel, GroupModel, SubjectModel} from "../models";
import {ApiError} from "../errors/api.error";
import {groupService} from "./group.service";

export const deadlineService = {
    async getById(id: number): Promise<DeadlineModel> {
        const deadline: Model<DeadlineModel> | null = await deadlineRepository.getById(id);
        if (!deadline) {
            throw ApiError.NotFoundError("Info not found");
        }
        return deadline.toJSON();
    },

    async create(deadlineDate: Date, typeOfWork: string, groupName: string, subjectId: number, teacherId: number): Promise<DeadlineModel> {
        const subject: Model<SubjectModel> | null = await subjectRepository.getById(subjectId);
        if (!subject) {
            throw ApiError.NotFoundError("Subject not found");
        }
        if (subject.toJSON().teacherId !== teacherId) {
            throw ApiError.ForbiddenError();
        }
        if (groupName === "") {
            const deadline: Model<DeadlineModel> = await deadlineRepository.create({ deadlineDate, typeOfWork, subjectId });
            return deadline.toJSON();
        } else {
            const group: Model<GroupModel> | null = await groupRepository.getByAttribute({ name: groupName });
            if (!group) {
                throw ApiError.NotFoundError("Group not found");
            }
            const groupId = group.toJSON().id;
            const deadline: Model<DeadlineModel> = await deadlineRepository.create({ deadlineDate, typeOfWork, groupId, subjectId });
            return deadline.toJSON();
        }
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

    async getAllBySubjectId(subjectId: number): Promise<DeadlineResponseModel[]> {
        const deadlines: Model<DeadlineModel>[] | null = await deadlineRepository.getAllBySubjectId(subjectId);
        const deadlineModels: DeadlineModel[] = deadlines.map(element => element.toJSON())
        const deadlinesWithGroup: DeadlineResponseModel[] = await Promise.all(deadlineModels.map(async element => {
            let group: GroupModel | null = null
            if (element.groupId) {
                 group = await groupService.getById(element.groupId)
            }
            return {
                id: element.id as number,
                typeOfWork: element.typeOfWork as string,
                deadlineDate: element.deadlineDate,
                groupName: group ? group.name : null
            } as DeadlineResponseModel
        }))
        return deadlines ? deadlinesWithGroup : [];
    }
}