import {AuthenticatedRequest} from "../interfaces/authenticated-request";
import {NextFunction, Response} from "express";
import {DeadlineModel} from "../models";
import {deadlineService} from "../services";

export const deadlineController = {
    async create(req: AuthenticatedRequest, res: Response, next: NextFunction) : Promise<Response | undefined> {
        try {
            const { deadlineDate, groupName, subjectId } = req.body;
            const teacherId = req.teacherId as number;
            console.log(deadlineDate.split(":"))
            const [ day, month, year ] = deadlineDate.split(":");
            console.log(`${day.valueOf()} ${month} ${year}`);
            const date = new Date(`${year}-${month}-${day}`);
            const deadline: DeadlineModel = await deadlineService.create(date, groupName, subjectId, teacherId);
            return res.status(200).json({ "deadline": deadline });
        } catch (error) {
            next(error);
        }
    },

    async delete(req: AuthenticatedRequest, res: Response, next: NextFunction) : Promise<Response | undefined> {
        try {
            const { deadlineId } = req.body;
            const teacherId = req.teacherId as number;
            const success = await deadlineService.delete(deadlineId, teacherId);
            return res.status(200).json({ "success": success });
        } catch (error) {
            next(error);
        }
    }
}