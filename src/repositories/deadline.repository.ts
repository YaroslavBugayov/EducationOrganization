import {BaseRepository} from "./base.repository";
import {Deadline} from "../database/db";

export class DeadlineRepository extends BaseRepository {
    constructor() {
        super(Deadline);
    }
}

const deadlineRepository = new DeadlineRepository();

export { deadlineRepository };