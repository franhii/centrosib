require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: process.env.DOCKER_DB_HOST || 'localhost',
      user: process.env.POSTGRES_USER || 'postgres',
      password: process.env.POSTGRES_PASSWORD || 'root',
      database: process.env.POSTGRES_DB || 'postgres',
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './api/db/migrations/',
    },
    seeds: {
      directory: './api/db/seeds/',
    },
  },
};
