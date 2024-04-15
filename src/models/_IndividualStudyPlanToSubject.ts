export default function(sequelize: any, DataTypes: any) {
  return sequelize.define('_IndividualStudyPlanToSubject', {
    A: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'IndividualStudyPlan',
        key: 'id'
      }
    },
    B: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Subject',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: '_IndividualStudyPlanToSubject',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "_IndividualStudyPlanToSubject_AB_unique",
        unique: true,
        fields: [
          { name: "A" },
          { name: "B" },
        ]
      },
      {
        name: "_IndividualStudyPlanToSubject_B_index",
        fields: [
          { name: "B" },
        ]
      },
    ]
  });
};
