import { DataTypes, Model, ModelStatic, Sequelize } from 'sequelize';
import {RSOModel} from "../../models";

export function rsoModel(sequelize: Sequelize): ModelStatic<Model<RSOModel>> {
  return sequelize.define('RSO', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    typeOfWork: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
}