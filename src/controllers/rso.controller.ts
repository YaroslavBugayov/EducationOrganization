import {NextFunction, Request, Response} from "express";
import {rsoService} from "../services";
import {AuthenticatedRequest} from "../interfaces/authenticated.request";
import {RSOModel} from "../models";

export const rsoController = {
    async create(req: AuthenticatedRequest, res: Response, next: NextFunction) : Promise<Response | undefined> {
        try {
            const { typeOfWork, subjectId } = req.body;
            const teacherId = req.teacherId as number;
            const rsoModel: RSOModel = { typeOfWork, subjectId }
            const rso = await rsoService.create(rsoModel, teacherId);
            return res.status(200).json({ "rso": rso });
        } catch (error) {
            next(error);
        }
    },

    // async getAllBySubjectId(req: AuthenticatedRequest, res: Response, next: NextFunction) : Promise<Response | undefined> {
    //     try {
    //         const { subjectId } = req.body;
    //         const subject = await rsoService.getAllBySubjectId(subjectId)
    //         return res.status(200).json({ "subject": subject });
    //     } catch (error) {
    //         next(error);
    //     }
    // },

    async delete(req: AuthenticatedRequest, res: Response, next: NextFunction) : Promise<Response | undefined> {
        try {
            const { rsoId } = req.body;
            const teacherId = req.teacherId as number;
            const success = await rsoService.delete(rsoId, teacherId);
            return res.status(200).json({ "success": success });
        } catch (error) {
            next(error);
        }
    }
}