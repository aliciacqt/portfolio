const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    connectionString:
      "postgres://alicia:WmGx8QYQllylIkLPyR6YJdzolHuByWnM@dpg-cidimmmnqqlb62jnsgag-a/portfolio_db_j6gt",
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.export = db;
