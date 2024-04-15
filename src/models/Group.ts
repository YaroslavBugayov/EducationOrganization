import {DataTypes, Model, ModelStatic, Sequelize} from "sequelize";

export function groupModel(sequelize: Sequelize): ModelStatic<Model> {
  return sequelize.define('Group', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    tableName: 'Group',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Group_name_key",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "Group_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
}
