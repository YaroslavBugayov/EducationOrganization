import {Request, Response, NextFunction} from "express";
import {authService} from "../services";

export const teacherController = {
    async login(req: Request, res: Response, next: NextFunction) : Promise<Response | undefined> {
        try {
            const { login, password } = req.body;
            const { refreshToken, accessToken, teacherModel } = await authService.login(login, password);

            res.cookie('refreshToken', refreshToken, { maxAge: 30 * 24 * 360000, httpOnly: true });
            const teacherName = teacherModel.name;
            const teacherLogin = teacherModel.login;
            return res.status(200).json({ "teacher": { teacherName, teacherLogin }, "accessToken": accessToken });
        } catch (error) {
            next(error)
        }
    },
}