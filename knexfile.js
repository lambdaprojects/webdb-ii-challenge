const knex = require("knex");

const config = {
  client: "sqlite3",
  connection: {
    filename: "./data/lambda.db3"
  },
  useNullAsDefault: true
};

module.exports = config;
