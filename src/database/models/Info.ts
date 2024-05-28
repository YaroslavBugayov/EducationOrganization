import { DataTypes, Model, ModelStatic, Sequelize } from 'sequelize';
import {InfoModel} from "../../models";

export function infoModel(sequelize: Sequelize): ModelStatic<Model<InfoModel>> {
  return sequelize.define('Info', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
}