const router = require("express").Router();

const technoControllers = require("../controllers/technoControllers");

router.get("/", technoControllers.browse);
router.get("/:id", technoControllers.read);
// router.put("/:id", projectControllers.edit);
// router.post("/", projectControllers.add);
// router.delete("/:id", projectControllers.destroy);

module.exports = router;
