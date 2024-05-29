import {BaseRepository} from "./base.repository";
import {Student} from "../database/db";

export class StudentRepository extends BaseRepository {
    constructor() {
        super(Student);
    }
}

const studentRepository = new StudentRepository();

export { studentRepository };