import {BaseRepository} from "./base.repository";
import {Deadline} from "../database/db";
import {Model} from "sequelize";

export class DeadlineRepository extends BaseRepository {
    constructor() {
        super(Deadline);
    }

    async getAllBySubjectId(subjectId: number): Promise<Model[]> {
        return this.model.findAll({
            where: { subjectId: subjectId }
        });
    }
}

const deadlineRepository = new DeadlineRepository();

export { deadlineRepository };