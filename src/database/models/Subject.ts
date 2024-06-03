import { DataTypes, Model, ModelStatic, Sequelize } from 'sequelize';
import {SubjectModel} from "../../models";

export function subjectModel(sequelize: Sequelize): ModelStatic<Model<SubjectModel>> {
  return sequelize.define('Subject', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    }
  });
}