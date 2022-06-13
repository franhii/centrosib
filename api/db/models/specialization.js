const { Model } = require('objection');

class Specialization extends Model {
  static get tableName() {
    return 'specialization';
  }
}

module.exports = Specialization;
