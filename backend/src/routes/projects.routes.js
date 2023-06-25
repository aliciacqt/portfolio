const router = require("express").Router();

const projectControllers = require("../controllers/projectControllers");

router.get("/", projectControllers.browse);
router.get("/:id", projectControllers.read);
// router.put("/:id", projectControllers.edit);
// router.post("/", projectControllers.add);
// router.delete("/:id", projectControllers.destroy);

module.exports = router;
