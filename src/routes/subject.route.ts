import express from "express";
import {
    createSubjectValidator,
    deleteSubjectValidator,
    searchSubjectValidator,
    updateSubjectValidator
} from "../validators/validator";
import {subjectController} from "../controllers";
import {authMiddleware, validationMiddleware} from "../middlewares";

const router = express.Router();

router.get('/search', searchSubjectValidator, validationMiddleware, subjectController.search);
router.patch('/update', authMiddleware, updateSubjectValidator, validationMiddleware, subjectController.update);
router.post('/create', authMiddleware, createSubjectValidator, validationMiddleware, subjectController.create);
router.delete('/delete', authMiddleware, deleteSubjectValidator, validationMiddleware, subjectController.delete);

export default router;