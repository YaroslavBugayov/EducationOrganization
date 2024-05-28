import { DataTypes, Model, ModelStatic, Sequelize } from 'sequelize';

export function infoModel(sequelize: Sequelize): ModelStatic<Model> {
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