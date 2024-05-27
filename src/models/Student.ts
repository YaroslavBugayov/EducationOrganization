import { DataTypes, Model, ModelStatic, Sequelize } from 'sequelize';

export function studentModel(sequelize: Sequelize): ModelStatic<Model> {
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