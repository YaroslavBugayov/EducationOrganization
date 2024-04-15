import {DataTypes, Model, ModelStatic, Sequelize} from "sequelize";

export function studentModel(sequelize: Sequelize): ModelStatic<Model> {
  return sequelize.define('Student', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Group',
        key: 'id'
      }
    },
    individualStudyPlanId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'IndividualStudyPlan',
        key: 'id'
      }
    }
  }, {
    tableName: 'Student',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Student_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
