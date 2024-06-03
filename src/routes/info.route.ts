import express from "express";
import {authMiddleware, validationMiddleware} from "../middlewares";
import {
    createInfoValidator,
    deleteInfoValidator,
} from "../validators/validator";
import {infoController} from "../controllers";

const router = express.Router();

router.post('/create', authMiddleware, createInfoValidator, validationMiddleware, infoController.create);
router.delete('/delete', authMiddleware, deleteInfoValidator, validationMiddleware, infoController.delete);

export default router;