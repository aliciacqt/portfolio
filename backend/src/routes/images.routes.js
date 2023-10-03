const router = require("express").Router();

const imageControllers = require("../controllers/imageControllers");

router.get("/", imageControllers.browse);
router.get("/:id", imageControllers.browseImages);

module.exports = router;
