import {DataTypes, Model, ModelStatic, Sequelize} from "sequelize";

export function individualStudyPlanModel(sequelize: Sequelize): ModelStatic<Model> {
  return sequelize.define('IndividualStudyPlan', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'IndividualStudyPlan',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "IndividualStudyPlan_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
}
