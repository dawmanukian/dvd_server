const Router = require("express");
const router = new Router();
const userController = require("../controllers/user.controller");

router.post("/create", userController.create);
router.get("/get-one/:telegramId", userController.getOne);
router.get("/get-friends/:telegramId", userController.getFriends);
router.put("/update-balance/:telegramId", userController.changeBalance);
router.put("/update-earned/:telegramId", userController.changeEarned);

module.exports = router;
