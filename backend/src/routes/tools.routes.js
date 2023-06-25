const router = require("express").Router();

const toolControllers = require("../controllers/toolControllers");

router.get("/", toolControllers.browse);
router.get("/:id", toolControllers.read);
// router.put("/:id", projectControllers.edit);
// router.post("/", projectControllers.add);
// router.delete("/:id", projectControllers.destroy);

module.exports = router;
