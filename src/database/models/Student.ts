import { DataTypes, Model, ModelStatic, Sequelize } from 'sequelize';
import {StudentModel} from "../../models";

export function studentModel(sequelize: Sequelize): ModelStatic<Model<StudentModel>> {
  return sequelize.define('Student', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });
}