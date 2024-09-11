const { User } = require("../models/model");

class UserController {
  async create(req, res, next) {
    try {
      const { telegramId, username, img, referral } = req.body;
      const user = await User.create({
        telegramId,
        username,
        img,
        referral,
      });
      if (user) {
        return res
          .status(201)
          .send({ success: true, ...user.toJSON(), ref: +referral });
      }
    } catch (error) {
      next(error);
    }
  }
  async getOne(req, res, next) {
    try {
      const { telegramId } = req.params;
      const user = await User.findOne({ where: { telegramId } });
      if (!user) {
        return res
          .status(404)
          .send({ success: false, message: "User not found" });
      }
      return res.json(user);
    } catch (error) {
      next(error);
    }
  }
  async changeBalance(req, res, next) {
    try {
      const { telegramId } = req.params;
      const { balance } = req.body;

      const user = await User.update({ balance }, { where: { telegramId } });
      if (!user) {
        return res.status(404).send({ success: false });
      }
      return res.json({ success: true });
    } catch (error) {
      next(error);
    }
  }
  async changeEarned(req, res, next) {
    try {
      const { telegramId } = req.params;
      const { earned } = req.body;

      const user = await User.update({ earned }, { where: { telegramId } });
      if (!user) {
        return res.status(404).send({ success: false });
      }
      return res.json({ success: true });
    } catch (error) {
      next(error);
    }
  }
  async getFriends(req, res, next) {
    try {
      const { telegramId } = req.params;

      const friends = await User.findAll({ where: { referral: telegramId } });

      return res.json(friends);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
