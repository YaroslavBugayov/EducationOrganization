import {BaseRepository} from "./baseRepository";
import {Group} from "../database";

export class GroupRepository extends BaseRepository {
    constructor() {
        super(Group);
    }
}

const groupRepository = new GroupRepository();

export { groupRepository };