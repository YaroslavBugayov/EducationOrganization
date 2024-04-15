import {DataTypes, Model, ModelStatic, Sequelize} from "sequelize";

export function subjectModel(sequelize: Sequelize): ModelStatic<Model> {
  return sequelize.define('Subject', {
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
    teacherId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Teacher',
        key: 'id'
      }
    }
  }, {
    tableName: 'Subject',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Subject_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
