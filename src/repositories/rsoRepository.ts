import {BaseRepository} from "./baseRepository";
import {RSO} from "../database";

export class RSORepository extends BaseRepository {
    constructor() {
        super(RSO);
    }
}

const rsoRepository = new RSORepository();

export { rsoRepository };