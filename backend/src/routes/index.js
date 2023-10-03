const router = require("express").Router();
const projectsRouter = require("./projects.routes");
const technosRouter = require("./technos.routes");
const toolsRouter = require("./tools.routes");
const imagesRouter = require("./images.routes");

router.use("/projects", projectsRouter);
router.use("/technos", technosRouter);
router.use("/tools", toolsRouter);
router.use("/images", imagesRouter);

module.exports = router;
