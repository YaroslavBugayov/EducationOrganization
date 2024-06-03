import {BaseRepository} from "./base.repository";
import {Group} from "../database/db";

export class GroupRepository extends BaseRepository {
    constructor() {
        super(Group);
    }
}

const groupRepository = new GroupRepository();

export { groupRepository };