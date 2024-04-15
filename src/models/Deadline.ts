import {DataTypes, Model, ModelStatic, Sequelize} from "sequelize";

export function deadlineModel(sequelize: Sequelize): ModelStatic<Model> {
  return sequelize.define('Deadline', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    typeOfWork: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    closingDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    subjectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Subject',
        key: 'id'
      }
    }
  }, {
    tableName: 'Deadline',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Deadline_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
}
