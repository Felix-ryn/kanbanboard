const { Column, Task } = require("../models");

exports.createColumn = async (req, res) => {
  try {
    const { boardId } = req.params;
    const { name, position, wip_limit } = req.body;

    const column = await Column.create({
      name,
      position,
      wip_limit,
      boardId
    });

    res.status(201).json(column);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getColumns = async (req, res) => {
  try {
    const { boardId } = req.params;

    const columns = await Column.findAll({
      where: { boardId },
      include: [Task],
      order: [["position", "ASC"]]
    });

    res.json(columns);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateColumn = async (req, res) => {
  try {
    const { id } = req.params;

    const column = await Column.findByPk(id);

    if (!column) {
      return res.status(404).json({
        message: "Column not found"
      });
    }

    await column.update(req.body);

    res.json(column);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteColumn = async (req, res) => {
  try {
    const { id } = req.params;

    const column = await Column.findByPk(id);

    if (!column) {
      return res.status(404).json({
        message: "Column not found"
      });
    }

    await column.destroy();

    res.json({
      message: "Column deleted"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.reorderColumns = async (req, res) => {
  try {
    const { columns } = req.body;

    for (const item of columns) {
      await Column.update(
        {
          position: item.position
        },
        {
          where: { id: item.id }
        }
      );
    }

    res.json({
      message: "Columns reordered"
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};