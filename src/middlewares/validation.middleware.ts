import {NextFunction, Request, Response} from "express";
import {validationResult} from "express-validator";

export default (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req)
    console.log(errors)
    if (errors.isEmpty()) {
        return next();
    }
    return res.status(422).send({errors: errors.array()});
}