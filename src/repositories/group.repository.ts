import {BaseRepository} from "./base.repository";
import {Group} from "../database";

export class GroupRepository extends BaseRepository {
    constructor() {
        super(Group);
    }
}

const groupRepository = new GroupRepository();

export { groupRepository };