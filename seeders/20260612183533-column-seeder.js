'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Columns', [
      {
        id: 1,
        name: 'To Do',
        position: 1,
        wip_limit: 5,
        boardId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'In Progress',
        position: 2,
        wip_limit: 3,
        boardId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'Review',
        position: 3,
        wip_limit: 2,
        boardId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: 'Done',
        position: 4,
        wip_limit: null,
        boardId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Columns', null, {});
  }
};