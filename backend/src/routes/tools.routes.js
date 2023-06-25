const router = require("express").Router();

const toolControllers = require("../controllers/toolControllers");

router.get("/", toolControllers.browse);
router.get("/:id", toolControllers.read);

module.exports = router;
