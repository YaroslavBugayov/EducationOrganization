import { DataTypes, Model, ModelStatic, Sequelize } from 'sequelize';
import {GroupModel} from "../../models";

export function groupModel(sequelize: Sequelize): ModelStatic<Model<GroupModel>> {
  return sequelize.define('Group', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
}