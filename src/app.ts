import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {deadlineRoute, infoRoute, rsoRoute, subjectRoute, teacherRoute} from "./routes";
import {errorMiddleware} from "./middlewares";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use('/api', teacherRoute);
app.use('/api/subject', subjectRoute);
app.use('/api/rso', rsoRoute);
app.use('/api/info', infoRoute);
app.use('/api/deadline', deadlineRoute);

app.use(errorMiddleware);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));