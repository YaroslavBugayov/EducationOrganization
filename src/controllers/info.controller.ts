import {NextFunction, Request, Response} from "express";
import {infoService} from "../services";
import {AuthenticatedRequest} from "../interfaces/authenticated-request";
import {InfoModel} from "../models";

export const infoController = {
    async create(req: AuthenticatedRequest, res: Response, next: NextFunction) : Promise<Response | undefined> {
        try {
            const { text, subjectId } = req.body;
            const teacherId = req.teacherId as number;
            const infoModel: InfoModel = { text, subjectId }
            const info = await infoService.create(infoModel, teacherId);
            return res.status(200).json({ "info": info });
        } catch (error) {
            next(error);
        }
    },

    async delete(req: AuthenticatedRequest, res: Response, next: NextFunction) : Promise<Response | undefined> {
        try {
            const { infoId } = req.body;
            const teacherId = req.teacherId as number;
            const success = await infoService.delete(infoId, teacherId);
            return res.status(200).json({ "success": success });
        } catch (error) {
            next(error);
        }
    }
}