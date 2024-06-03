import {BaseRepository} from "./base.repository";
import {Info} from "../database/db";
import {Model} from "sequelize";

export class InfoRepository extends BaseRepository {
    constructor() {
        super(Info);
    }

    async getAllBySubjectId(subjectId: number): Promise<Model[]> {
        return this.model.findAll({
            where: { subjectId: subjectId }
        });
    }
}

const infoRepository = new InfoRepository();

export { infoRepository };