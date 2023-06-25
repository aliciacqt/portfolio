const AbstractManager = require("./AbstractManager");

class ImageManager extends AbstractManager {
  constructor() {
    super({ table: "projectimage" });
  }

  findAll() {
    return this.database.query(
      `SELECT p.id AS projectId, d.id AS deviceId, d.device_name AS deviceName, pi.id, pi.image, pi.device_id , pi.project_id 
      FROM ${this.table} AS pi 
      JOIN project AS p ON pi.project_id = p.id 
      JOIN device AS d ON d.id = pi.device_id 
      ORDER BY pi.id`
    );
  }

  findImagesByProject(id) {
    return this.database.query(
      `SELECT d.device_name AS deviceName, pi.id, pi.image
      FROM ${this.table} AS pi 
      JOIN project AS p ON pi.project_id = p.id 
      JOIN device AS d ON d.id = pi.device_id  
      WHERE pi.project_id = ?
      ORDER BY pi.id`,
      [id]
    );
  }

  find(id) {
    return this.database.query(
      `SELECT p.id, d.id, d.device_name AS deviceName, pi.id, pi.image, pi.device_id , pi.project_id 
      FROM ${this.table} AS pi 
      JOIN project AS p ON pi.project_id = p.id 
      JOIN device AS d ON d.id = pi.device_id 
      WHERE p.id = ? ORDER BY pi.id`,
      [id]
    );
  }
}

module.exports = ImageManager;
