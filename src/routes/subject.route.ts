import express from "express";
import {subjectValidator, searchSubjectValidator, updateSubjectValidator} from "../validators/validator";
import {subjectController} from "../controllers";
import {authMiddleware, validationMiddleware} from "../middlewares";

const router = express.Router();

router.get('/search', searchSubjectValidator, validationMiddleware, subjectController.search);
router.patch('/update', authMiddleware, updateSubjectValidator, validationMiddleware, subjectController.update);
router.post('/create', authMiddleware, subjectValidator, validationMiddleware, subjectController.create);
router.delete('/delete', authMiddleware, subjectValidator, validationMiddleware, subjectController.delete);

export default router;