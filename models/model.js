const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  telegramId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  balance: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  earned: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  clickedDvd: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  scream: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  speed: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  dvdBox: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  referral: {
    type: DataTypes.BIGINT,
    allowNull: true,
  },
});

const Task = sequelize.define("Task", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  task: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

const Upgrade = sequelize.define("Upgrade", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  upgrade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

sequelize.sync({ alter: true })
  .then(() => {
    console.log("The table for the User model has been updated!");
  })
  .catch((error) => {
    console.error("Unable to sync the database:", error);
  });

module.exports = { User, Task, Upgrade };
