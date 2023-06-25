const router = require("express").Router();

const imageControllers = require("../controllers/imageControllers");

router.get("/", imageControllers.browse);
router.get("/:id", imageControllers.browseImages);
// router.put("/:id", projectControllers.edit);
// router.post("/", projectControllers.add);
// router.delete("/:id", projectControllers.destroy);

module.exports = router;
