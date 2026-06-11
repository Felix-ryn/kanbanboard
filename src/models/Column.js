const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Column = sequelize.define("Column", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  position: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  wip_limit: {
    type: DataTypes.INTEGER,
    defaultValue: null
  }
});

module.exports = Column;