const Board = require("./Board");
const Column = require("./Column");
const Task = require("./Task");

Board.hasMany(Column, {
  foreignKey: "boardId",
  onDelete: "CASCADE"
});

Column.belongsTo(Board, {
  foreignKey: "boardId"
});

Column.hasMany(Task, {
  foreignKey: "columnId",
  onDelete: "CASCADE"
});

Task.belongsTo(Column, {
  foreignKey: "columnId"
});

module.exports = {
  Board,
  Column,
  Task
};  