import {BaseRepository} from "./baseRepository";
import {Teacher} from "../database";

export class TeacherRepository extends BaseRepository {
    constructor() {
        super(Teacher);
    }
}

const teacherRepository = new TeacherRepository();

export { teacherRepository };