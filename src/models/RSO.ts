import {DataTypes, Model, ModelStatic, Sequelize} from "sequelize";

export function rsoModel(sequelize: Sequelize): ModelStatic<Model> {
  return sequelize.define('RSO', {
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
    score: {
      type: DataTypes.INTEGER,
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
    tableName: 'RSO',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "RSO_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
