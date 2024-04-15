import {BaseRepository} from "./baseRepository";
import {Student} from "../database";

export class StudentRepository extends BaseRepository {
    constructor() {
        super(Student);
    }
}

const studentRepository = new StudentRepository();

export { studentRepository };