require("dotenv").config();

const pg = require("pg");

const localPgConnection = {
  host: "localhost",
  user: "postgres",
  password: "ReleaseCanvas1",
  database: "postgres"
};

const dbConnection = process.env.DATABASE_URL || localPgConnection;

// Postgres configurations
// Command for running postgres locally:
// knex migrate:latest --env production
// knex seed:run --env production

module.exports = {
  development: {
    client: "pg",
    connection: dbConnection,
    useNullAsDefault: true,
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    }
  },

  staging: {
    client: "pg",
    connection: dbConnection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  },

  production: {
    client: "pg",
    connection: dbConnection,
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: "./data/migrations"
    },
    seeds: {
      directory: "./data/seeds"
    }
  }
};
