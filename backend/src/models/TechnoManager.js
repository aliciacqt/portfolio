const AbstractManager = require("./AbstractManager");

class TechnoManager extends AbstractManager {
  constructor() {
    super({ table: "techno" });
  }

  findAll() {
    return this.database.query(
      `select id, techno_name AS technoName from  ${this.table}`
    );
  }
}

module.exports = TechnoManager;
