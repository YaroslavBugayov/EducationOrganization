import {BaseRepository} from "./base.repository";
import {Info} from "../database/db";

export class InfoRepository extends BaseRepository {
    constructor() {
        super(Info);
    }
}

const infoRepository = new InfoRepository();

export { infoRepository };