'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tasks', [
      {
        id: 1,
        title: 'Membuat Landing Page',
        description: 'Halaman utama website',
        deadline: '2026-06-30',
        position: 1,
        columnId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        title: 'Membuat Navbar',
        description: 'Responsive Navbar',
        deadline: '2026-06-30',
        position: 2,
        columnId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        title: 'Setup Repository',
        description: 'Inisialisasi Git dan GitHub',
        deadline: '2026-06-25',
        position: 3,
        columnId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        title: 'Membuat Login UI',
        description: 'Desain halaman login',
        deadline: '2026-06-28',
        position: 4,
        columnId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 5,
        title: 'Testing Responsive',
        description: 'Pengujian tampilan mobile',
        deadline: '2026-06-29',
        position: 1,
        columnId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 6,
        title: 'Integrasi API',
        description: 'Menghubungkan frontend dan backend',
        deadline: '2026-06-29',
        position: 2,
        columnId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 7,
        title: 'Implementasi Drag and Drop',
        description: 'Memindahkan task antar column',
        deadline: '2026-06-30',
        position: 3,
        columnId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        id: 8,
        title: 'Analisis Requirement',
        description: 'Mengumpulkan kebutuhan sistem',
        deadline: '2026-06-20',
        position: 1,
        columnId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 9,
        title: 'Desain ERD',
        description: 'Membuat Entity Relationship Diagram',
        deadline: '2026-06-21',
        position: 2,
        columnId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 10,
        title: 'Dokumentasi API',
        description: 'Membuat dokumentasi endpoint',
        deadline: '2026-06-22',
        position: 3,
        columnId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tasks', null, {});
  }
};