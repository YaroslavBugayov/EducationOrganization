import {DataTypes, Model, ModelStatic, Sequelize} from "sequelize";

export function infoModel(sequelize: Sequelize): ModelStatic<Model> {
  return sequelize.define('Info', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    text: {
      type: DataTypes.STRING(200),
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
    tableName: 'Info',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Info_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
