import {NextFunction, Response} from "express";
import {ApiError} from "../errors/api.error";
import {tokenService} from "../services";
import {AuthenticatedRequest} from "../interfaces/authenticated.request";

export default (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return next(ApiError.UnauthorizedError());
        }

        const accessToken = authHeader.split(' ')[1];
        const teacherId = tokenService.validateAccessToken(accessToken);

        if (!teacherId) {
            return next(ApiError.UnauthorizedError());
        }

        req.teacherId = teacherId;
        next();
    } catch (error) {
        return next(ApiError.UnauthorizedError());
    }
}