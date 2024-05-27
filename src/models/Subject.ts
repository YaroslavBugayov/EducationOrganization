import { DataTypes, Model, ModelStatic, Sequelize } from 'sequelize';

export function subjectModel(sequelize: Sequelize): ModelStatic<Model> {
  return sequelize.define('Subject', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
}