import {NextFunction, Request, Response} from "express";
import {validationResult} from "express-validator";
import {subjectService} from "../services";

export const subjectController = {
    async search(req: Request, res: Response, next: NextFunction) : Promise<Response | undefined> {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                res.status(422).send({errors: errors.array()});
            }

            const { text } = req.body;
            const subjects = await subjectService.search(text)

            return res.status(200).json({ "subjects": subjects });
        } catch (error) {
            next(error)
        }
    },
}