import { DataTypes, Model, ModelStatic, Sequelize } from 'sequelize';

export function deadlineModel(sequelize: Sequelize): ModelStatic<Model> {
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