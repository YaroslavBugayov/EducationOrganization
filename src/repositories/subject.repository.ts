import {BaseRepository} from "./base.repository";
import {Subject} from "../database";
import {Model} from "sequelize";
import {sequelize} from "../database/db";

export class SubjectRepository extends BaseRepository {
    constructor() {
        super(Subject);
    }

    async search(text: string): Promise<Model[] | null> {
        return this.model.findAll({
            limit: 10,
            where: {
                name: sequelize.where(sequelize.fn('LOWER', sequelize.col('name')), 'LIKE', `%${text}%`)
            }
        });
    }

    async changeName(oldName: string, newName: string): Promise<[number]> {
        return this.model.update(
            { name: newName },
            { where: { name: oldName } }
        )
    }
}

const subjectRepository = new SubjectRepository();

export { subjectRepository };