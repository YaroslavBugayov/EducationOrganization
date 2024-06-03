import express from "express";
import {authMiddleware, validationMiddleware} from "../middlewares";
import {
    createDeadlineValidator,
    deleteDeadlineValidator,
} from "../validators/validator";
import {deadlineController} from "../controllers";

const router = express.Router();

router.post('/create', authMiddleware, createDeadlineValidator, validationMiddleware, deadlineController.create);
router.delete('/delete', authMiddleware, deleteDeadlineValidator, validationMiddleware, deadlineController.delete);

export default router;