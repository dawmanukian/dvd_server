const Router = require("express");
const router = new Router();
const userController = require("../controllers/user.controller");

router.post("/create", userController.create);
router.get("/get-one/:telegramId", userController.getOne);
router.get("/get-friends/:telegramId", userController.getFriends);
router.put("/update-balance/:telegramId", userController.changeBalance);
router.put("/update-earned/:telegramId", userController.changeEarned);
router.put("/change-scream-time/:telegramId", userController.changeTimeScream);
router.put("/change-speed-time/:telegramId", userController.changeTimeSpeed);
router.put("/change-dvdBox-time/:telegramId", userController.changeTimeDvdBox);
router.put("/click-dvd/:telegramId", userController.clickDvd);

module.exports = router;
