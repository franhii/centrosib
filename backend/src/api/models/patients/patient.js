const tableNames = require('../../../libs/tableNames');
const schema = require('./patients.schema.json');
const { Model } = require('objection');

class Patient extends Model {
  static get tableName() {
    return tableNames.patient;
  }

  static get jsonSchema() {
    return schema;
  }
}
module.exports = Patient;
