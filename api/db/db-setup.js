const knex = require("knex");
const knexfile = require("../../knexfile");
const { Model } = require("objection");

const setupDB = () => {
  // Instala la base de datos global dentro de todos los modelos
  // Ahora objection.js sabe como acceder nuestra base de datos
  const db = knex(knexfile.development);
  Model.knex(db);
};

module.exports = setupDB;
