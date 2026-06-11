const router = require("express").Router();

const {
  createColumn,
  getColumns,
  updateColumn,
  deleteColumn,
  reorderColumns
} = require("../controllers/columnController");

router.get("/board/:boardId", getColumns);

router.post("/board/:boardId", createColumn);

router.put("/:id", updateColumn);

router.delete("/:id", deleteColumn);

router.patch("/reorder", reorderColumns);

module.exports = router;