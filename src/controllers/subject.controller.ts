import {NextFunction, Request, Response} from "express";
import {subjectService} from "../services";

export const subjectController = {
    async search(req: Request, res: Response, next: NextFunction) : Promise<Response | undefined> {
        try {
            const { text } = req.body;
            const subjects = await subjectService.search(text);

            return res.status(200).json({ "subjects": subjects });
        } catch (error) {
            next(error);
        }
    },

    async create(req: Request, res: Response, next: NextFunction) : Promise<Response | undefined> {
        try {
            const subject = await subjectService.create(req.body);
            return res.status(200).json({ "subject": subject });
        } catch (error) {
            next(error);
        }
    },

    async update(req: Request, res: Response, next: NextFunction) : Promise<Response | undefined> {
        try {
            const { oldName, newName } = req.body;
            const subject = await subjectService.changeName(oldName, newName);
            return res.status(200).json({ "subject": subject });
        } catch (error) {
            next(error);
        }
    }
}