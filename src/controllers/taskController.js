const { Task, Column } = require("../models");

exports.createTask = async (req, res) => {
  try {
    const { columnId } = req.params;

    const {
      title,
      description,
      deadline,
      position
    } = req.body;

    const task = await Task.create({
      title,
      description,
      deadline,
      position,
      columnId
    });

    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

exports.getTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    res.json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    await task.update(req.body);

    res.json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    await task.destroy();

    res.json({
      message: "Task deleted"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

exports.moveTask = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      targetColumnId,
      position
    } = req.body;

    const task = await Task.findByPk(id);

    if (!task) {
      return res.status(404).json({
        message: "Task not found"
      });
    }

    const targetColumn = await Column.findByPk(
      targetColumnId
    );

    if (!targetColumn) {
      return res.status(404).json({
        message: "Target column not found"
      });
    }

    if (targetColumn.wip_limit) {
      const totalTask = await Task.count({
        where: {
          columnId: targetColumnId
        }
      });

      if (totalTask >= targetColumn.wip_limit) {
        return res.status(400).json({
          message: "WIP limit exceeded"
        });
      }
    }

    await task.update({
      columnId: targetColumnId,
      position
    });

    res.json(task);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

exports.reorderTasks = async (req, res) => {
  try {
    const { tasks } = req.body;

    for (const item of tasks) {
      await Task.update(
        {
          position: item.position
        },
        {
          where: {
            id: item.id
          }
        }
      );
    }

    res.json({
      message: "Tasks reordered"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};