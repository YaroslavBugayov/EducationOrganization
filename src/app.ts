import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {subjectRoute, teacherRoute} from "./routes";
import {errorMiddleware, validationMiddleware} from "./middlewares";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/api', teacherRoute);
app.use('/api/subject', subjectRoute);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));