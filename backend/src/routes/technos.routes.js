const router = require("express").Router();

const technoControllers = require("../controllers/technoControllers");

router.get("/", technoControllers.browse);
router.get("/:id", technoControllers.read);

module.exports = router;
