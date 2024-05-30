import {BaseRepository} from "./base.repository";
import {RSO} from "../database/db";
import {Model} from "sequelize";

export class RSORepository extends BaseRepository {
    constructor() {
        super(RSO);
    }

    async getAllBySubjectId(subjectId: number): Promise<Model[]> {
        return this.model.findAll({
            where: { subjectId: subjectId }
        });
    }
}

const rsoRepository = new RSORepository();

export { rsoRepository };