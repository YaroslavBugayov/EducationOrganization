import {BaseRepository} from "./baseRepository";
import {Subject} from "../database";

export class SubjectRepository extends BaseRepository {
    constructor() {
        super(Subject);
    }
}

const subjectRepository = new SubjectRepository();

export { subjectRepository };