import { Sequelize } from "sequelize";

import dotenv from "dotenv";
import {deadlineModel, groupModel, infoModel, rsoModel, studentModel, subjectModel, teacherModel} from "./models";

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
    dialect: "postgres",
    define: { timestamps: false }
});

const Group = groupModel(sequelize);
const Deadline = deadlineModel(sequelize);
const Info = infoModel(sequelize);
const RSO = rsoModel(sequelize);
const Student = studentModel(sequelize);
const Subject = subjectModel(sequelize);
const Teacher = teacherModel(sequelize);

Student.belongsTo(Group, { foreignKey: 'groupId' });
Group.hasMany(Student, { foreignKey: 'groupId' });

Student.belongsToMany(Subject, { through: 'StudentSubjects' });
Subject.belongsToMany(Student, { through: 'StudentSubjects' });

Subject.hasMany(RSO, { foreignKey: 'subjectId' });
RSO.belongsTo(Subject, { foreignKey: 'subjectId' });

Subject.hasMany(Deadline, { foreignKey: 'subjectId' });
Deadline.belongsTo(Subject, { foreignKey: 'subjectId' });
Deadline.belongsTo(Group, { foreignKey: 'groupId' });

Subject.hasMany(Info, { foreignKey: 'subjectId' });
Info.belongsTo(Subject, { foreignKey: 'subjectId' });

Subject.belongsTo(Teacher, { foreignKey: 'teacherId' });
Teacher.hasMany(Subject, { foreignKey: 'teacherId' });

export { sequelize };
export { Group, Deadline, Info, RSO, Student, Subject, Teacher };