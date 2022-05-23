const { Model } = require("objection");

class Doctor extends Model {
	static get tableName() {
		return "doctor";
	}
	static get relationMappings() {
		const path = require("path");
		const specializationPath = path.join(__dirname, "../models/specialization");
		const doctorSpecializationPath = path.join(__dirname, "../models/doctor_specialization");
		return {
			specialization: {
				relation: Model.ManyToManyRelation,
				modelClass: specializationPath,
				join: {
					from: "doctor.id",
					through: {
						from: "doctor_specialization.doctor_id",
						to: "doctor_specialization.specialization_id",
					},
					to: "specialization.id",
				},
			},
			doctor_specialization: {
				relation: Model.HasManyRelation,
				modelClass: doctorSpecializationPath,
				join: {
					from: 'doctor.id',
					to: "doctor_specialization.doctor_id"
				}
			}
		};
	}
}
module.exports = Doctor;
