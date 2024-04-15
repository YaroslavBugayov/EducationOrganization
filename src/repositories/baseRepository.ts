import {Model, ModelStatic} from "sequelize";

export class BaseRepository {
    constructor(private model: ModelStatic<Model>) { }

    async create(data: any): Promise<Model> {
        return this.model.create(data);
    }

    async getById(id: number): Promise<Model | null> {
        return this.model.findOne({
            where: {id}
        });
    }

    async getAll(): Promise<Model[]> {
        return this.model.findAll();
    }

    async update(id: number, data: any): Promise<[number]> {
        return this.model.update(
            { data: data },
            { where: {id} }
        );
    }

    async delete(id: number) {
        return this.model.destroy({
            where: {id}
        });
    }
}