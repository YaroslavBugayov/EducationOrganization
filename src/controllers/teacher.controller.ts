import {Request, Response, NextFunction} from "express";
import {authService, teacherService} from "../services";
import {validationResult} from "express-validator";

export const teacherController = {
    async login(req: Request, res: Response, next: NextFunction) : Promise<Response | undefined> {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                res.status(422).send({errors: errors.array()});
            }

            const { login, password } = req.body;
            const { refreshToken, accessToken, teacherModel } = await authService.login(login, password);

            res.cookie('refreshToken', refreshToken, { maxAge: 30 * 24 * 360000, httpOnly: true });

            return res.status(200).json({ "teacher": teacherModel, "accessToken": accessToken });
        } catch (error) {
            next(error)
        }
    },
}