const AbstractManager = require("./AbstractManager");

class ToolManager extends AbstractManager {
  constructor() {
    super({ table: "tool" });
  }

  findAll() {
    return this.database.query(
      `select id, tool_name AS toolName from  ${this.table}`
    );
  }
}

module.exports = ToolManager;
