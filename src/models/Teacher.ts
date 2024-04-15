import {DataTypes, Model, ModelStatic, Sequelize} from "sequelize";

export function teacherModel(sequelize: Sequelize): ModelStatic<Model> {
  return sequelize.define('Teacher', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'Teacher',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Teacher_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
