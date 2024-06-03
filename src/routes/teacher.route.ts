import express from "express";
import {teacherController} from "../controllers";
import {loginValidator} from "../validators/validator";
import {validationMiddleware} from "../middlewares";

const router = express.Router();

router.post('/login', loginValidator, validationMiddleware, teacherController.login);

export default router;