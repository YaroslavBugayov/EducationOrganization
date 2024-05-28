import express from "express";
import {searchSubjectValidator} from "../validators/validator";
import {subjectController} from "../controllers";

const router = express.Router();

router.get('/search', searchSubjectValidator, subjectController.search)

export default router;