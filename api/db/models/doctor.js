const { Model } = require("objection");

class Doctor extends Model {
  static get tableName() {
    return "doctor";
  }
  static get relationMappings() {
    const path = require("path");
    const dirPath = path.join(__dirname, "../models/specialization");
    return {
      specialization: {
        relation: Model.ManyToManyRelation,
        modelClass: dirPath,
        join: {
          from: "doctor.id",
          through: {
            from: "doctor_specialization.doctor_id",
            to: "doctor_specialization.specialization_id",
          },
          to: "specialization.id",
        },
      },
    };
  }
}
module.exports = Doctor;
