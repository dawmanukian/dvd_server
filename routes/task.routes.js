const Router = require("express");
const router = new Router();
const taskController = require("../controllers/task.controller");

router.post("/create", taskController.create);

module.exports = router;
