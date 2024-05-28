import { DataTypes, Model, ModelStatic, Sequelize } from 'sequelize';

export function groupModel(sequelize: Sequelize): ModelStatic<Model> {
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