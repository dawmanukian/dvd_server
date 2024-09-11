const Router = require("express");
const router = new Router();
const upgradeController = require("../controllers/upgrade.controller");

router.post("/create", upgradeController.create);

module.exports = router;
