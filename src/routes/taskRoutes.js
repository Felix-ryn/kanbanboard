const router = require("express").Router();

const {
  createTask,
  getTask,
  updateTask,
  deleteTask,
  moveTask,
  reorderTasks
} = require("../controllers/taskController");

router.post("/column/:columnId", createTask);

router.get("/:id", getTask);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

router.patch("/:id/move", moveTask);

router.patch("/reorder/all", reorderTasks);

module.exports = router;