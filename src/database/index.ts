import {groupModel} from "../models/Group";
import {sequelize} from "./db";
import {deadlineModel} from "../models/Deadline";
import {infoModel} from "../models/Info";
import {rsoModel} from "../models/RSO";
import {studentModel} from "../models/Student";
import {subjectModel} from "../models/Subject";
import {teacherModel} from "../models/Teacher";

export const Group = groupModel(sequelize);
export const Deadline = deadlineModel(sequelize);
export const Info = infoModel(sequelize);
export const RSO = rsoModel(sequelize);
export const Student = studentModel(sequelize);
export const Subject = subjectModel(sequelize);
export const Teacher = teacherModel(sequelize);
export const IndividualStudyPlan = studentModel(sequelize);