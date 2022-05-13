const { Model } = require("objection");

class Doctor extends Model {
  static get tableName() {
    return "doctor";
  }
}
module.exports = Doctor;
