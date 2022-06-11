require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.DB_HOST,
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./api/db/migrations/",
    },
    seeds: {
      directory: "./api/db/seeds/",
    },
  },
};
