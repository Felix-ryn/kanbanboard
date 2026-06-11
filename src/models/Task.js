const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Task = sequelize.define("Task", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },

  description: {
    type: DataTypes.TEXT
  },

  deadline: {
    type: DataTypes.DATEONLY
  },

  position: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Task; 