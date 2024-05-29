import express from "express";
import {searchSubjectValidator, updateSubjectValidator} from "../validators/validator";
import {subjectController} from "../controllers";
import {validationMiddleware} from "../middlewares";

const router = express.Router();

router.get('/search', searchSubjectValidator, validationMiddleware, subjectController.search);
router.post('/update', updateSubjectValidator, validationMiddleware, subjectController.update);

export default router;