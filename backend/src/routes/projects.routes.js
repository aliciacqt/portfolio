const router = require("express").Router();

const projectControllers = require("../controllers/projectControllers");

router.get("/", projectControllers.browse);
router.get("/:id", projectControllers.read);

module.exports = router;
