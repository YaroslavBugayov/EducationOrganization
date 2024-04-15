import {BaseRepository} from "./baseRepository";
import {IndividualStudyPlan} from "../database";

export class IndividualStudyPlanRepository extends BaseRepository {
    constructor() {
        super(IndividualStudyPlan);
    }
}

const individualStudyPlanRepository = new IndividualStudyPlanRepository();

export { individualStudyPlanRepository };