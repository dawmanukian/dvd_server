const { Task } = require("../models/model");

class TaskController {
  async create(req, res, next) {
    try {
      const { telegramId } = req.params;
      const { task } = req.body;
      const created = await Task.create({
        task,
        user: telegramId,
      });

      return res.json({ success: true });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new TaskController();
