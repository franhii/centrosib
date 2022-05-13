const { Model } = require("objection");

class Specialization extends Model {
  static get tableName() {
    return "Specialization";
  }
}

module.exports = Specialization;
