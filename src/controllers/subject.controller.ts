import {NextFunction, Request, Response} from "express";
import {deadlineService, infoService, rsoService, subjectService} from "../services";
import {AuthenticatedRequest} from "../interfaces/authenticated-request";
import {SubjectModel} from "../models";

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

    async get(req: Request, res: Response, next: NextFunction) : Promise<Response | undefined> {
        try {
            const { id } = req.body;
            const subject = await subjectService.getById(id);
            const rsos = await rsoService.getAllBySubjectId(id);
            const infos = await infoService.getAllBySubjectId(id);
            const deadlines = await deadlineService.getAllBySubjectId(id);
            return res.status(200).json({ "subjects": subject, "rsos": rsos, "infos": infos, "deadlines": deadlines });
        } catch (error) {
            next(error);
        }
    },

    async create(req: AuthenticatedRequest, res: Response, next: NextFunction) : Promise<Response | undefined> {
        try {
            const { name } = req.body;
            const teacherId = req.teacherId as number;
            const subjectModel: SubjectModel = { name, teacherId }
            const subject = await subjectService.create(subjectModel);
            return res.status(200).json({ "subject": subject });
        } catch (error) {
            next(error);
        }
    },

    async update(req: AuthenticatedRequest, res: Response, next: NextFunction) : Promise<Response | undefined> {
        try {
            const { oldName, newName } = req.body;
            const teacherId = req.teacherId as number;
            const subject = await subjectService.changeName(oldName, newName, teacherId);
            return res.status(200).json({ "subject": subject });
        } catch (error) {
            next(error);
        }
    },

    async delete(req: AuthenticatedRequest, res: Response, next: NextFunction) : Promise<Response | undefined> {
        try {
            const { subjectId } = req.body;
            const teacherId = req.teacherId as number;
            const success = await subjectService.delete(subjectId, teacherId);
            return res.status(200).json({ "success": success });
        } catch (error) {
            next(error);
        }
    }
}