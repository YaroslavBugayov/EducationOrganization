import express from "express";
import {teacherController} from "../controllers";
import {loginValidator} from "../validators/validator";

const router = express.Router();

router.post('/login', loginValidator, teacherController.login)

export default router;