import { DataTypes, Model, ModelStatic, Sequelize } from 'sequelize';

export function rsoModel(sequelize: Sequelize): ModelStatic<Model> {
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