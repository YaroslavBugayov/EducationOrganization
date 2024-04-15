import {BaseRepository} from "./baseRepository";
import {Deadline} from "../database";

export class DeadlineRepository extends BaseRepository {
    constructor() {
        super(Deadline);
    }
}

const deadlineRepository = new DeadlineRepository();

export { deadlineRepository };