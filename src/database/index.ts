import {groupModel, deadlineModel, infoModel, rsoModel, studentModel,
    subjectModel, teacherModel} from "./models";
import {sequelize} from "./db";

export const Group = groupModel(sequelize);
export const Deadline = deadlineModel(sequelize);
export const Info = infoModel(sequelize);
export const RSO = rsoModel(sequelize);
export const Student = studentModel(sequelize);
export const Subject = subjectModel(sequelize);
export const Teacher = teacherModel(sequelize);