'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('registrations', 'role', {
      type: Sequelize.ENUM('admin','user'),
      allowNull: false,
      defaultValue:'user'
    });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('registrations', 'role');
  }
};
