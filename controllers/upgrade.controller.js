const { Upgrade } = require("../models/model");

class UpgradeController {
  async create(req, res, next) {
    try {
      const { telegramId } = req.params;
      const { upgrade } = req.body;

      const created = await Upgrade.create({
        upgrade,
        user: telegramId,
      });

      return res.json({ success: true });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UpgradeController();
