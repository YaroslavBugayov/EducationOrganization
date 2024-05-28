import { DataTypes, Model, ModelStatic, Sequelize } from 'sequelize';
import {DeadlineModel} from "../../models";

export function deadlineModel(sequelize: Sequelize): ModelStatic<Model<DeadlineModel>> {
  return sequelize.define('Deadline', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    deadlineDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
}