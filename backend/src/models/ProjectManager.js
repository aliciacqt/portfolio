const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  // find(id) {
  //   return this.database.query(
  //     `SELECT p.id, p.title, p.pitch, p.link, d.id, d.device_name AS deviceName, pi.id, pi.image, pi.device_id , pi.project_id
  //     FROM ${this.table} AS p
  //     JOIN projectimage AS pi ON pi.project_id = p.id
  //     JOIN device AS d ON d.id = pi.device_id
  //     WHERE p.id = ? ORDER BY pi.id`,
  //     [id]
  //   );
  // }
}

module.exports = ProjectManager;
