const { Board, Column, Task } = require("../models");

// GET ALL BOARDS
exports.getBoards = async (req, res) => {
  try {
    const boards = await Board.findAll();

    res.json(boards);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// GET BOARD BY ID
exports.getBoardById = async (req, res) => {
  try {
    const board = await Board.findByPk(req.params.id, {
      include: [
        {
          model: Column,
          include: [Task]
        }
      ]
    });

    if (!board) {
      return res.status(404).json({
        message: "Board not found"
      });
    }

    res.json(board);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// CREATE BOARD
exports.createBoard = async (req, res) => {
  try {
    const board = await Board.create(req.body);

    res.status(201).json(board);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// UPDATE BOARD
exports.updateBoard = async (req, res) => {
  try {
    const board = await Board.findByPk(req.params.id);

    if (!board) {
      return res.status(404).json({
        message: "Board not found"
      });
    }

    await board.update(req.body);

    res.json(board);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// DELETE BOARD
exports.deleteBoard = async (req, res) => {
  try {
    const board = await Board.findByPk(req.params.id);

    if (!board) {
      return res.status(404).json({
        message: "Board not found"
      });
    }

    await board.destroy();

    res.json({
      message: "Board deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};