import {GroupModel} from "../models";
import {Model} from "sequelize";
import {groupRepository} from "../repositories";
import {ApiError} from "../errors/api.error";

export const groupService = {
    async getById(id: number): Promise<GroupModel> {
        const group: Model<GroupModel> | null = await groupRepository.getById(id);
        if (!group) {
            throw ApiError.NotFoundError("Group not found");
        }
        return group.toJSON();
    }
}