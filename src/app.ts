import express from "express";
import dotenv from "dotenv";
import {BaseRepository} from "./repositories/baseRepository";
import {Group} from "./database";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));