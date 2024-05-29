import {BaseRepository} from "./base.repository";
import {RSO} from "../database/db";

export class RSORepository extends BaseRepository {
    constructor() {
        super(RSO);
    }
}

const rsoRepository = new RSORepository();

export { rsoRepository };