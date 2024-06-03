import { DataTypes, Model, ModelStatic, Sequelize } from 'sequelize';
import {TeacherModel} from "../../models";

export function teacherModel(sequelize: Sequelize): ModelStatic<Model<TeacherModel>> {
  return sequelize.define('Teacher', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    refreshToken: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
}