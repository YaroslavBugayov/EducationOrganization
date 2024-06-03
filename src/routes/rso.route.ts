import express from "express";
import {createRsoValidator, deleteRsoValidator} from "../validators/validator";
import {authMiddleware, validationMiddleware} from "../middlewares";
import {rsoController} from "../controllers";

const router = express.Router();

router.post('/create', authMiddleware, createRsoValidator, validationMiddleware, rsoController.create);
router.delete('/delete', authMiddleware, deleteRsoValidator, validationMiddleware, rsoController.delete);

export default router;