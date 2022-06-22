const { Model } = require('objection');

class Doctor_Specialization extends Model {
  static get tableName() {
    return 'doctor_specialization';
  }
}

module.exports = Doctor_Specialization;
