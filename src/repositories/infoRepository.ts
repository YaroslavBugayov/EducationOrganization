import {BaseRepository} from "./baseRepository";
import {Info} from "../database";

export class InfoRepository extends BaseRepository {
    constructor() {
        super(Info);
    }
}

const infoRepository = new InfoRepository();

export { infoRepository };