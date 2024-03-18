'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cards', {
      
      cardnumber: {
        type: Sequelize.STRING,
        allowNull:false,
        primaryKey:true,
        unique:true
      },
      username: {
        type: Sequelize.STRING,
        references: {
          model: "registrations",
          key: "username",
        },
        onDelete: "cascade",
      },
      balance: {
        type: Sequelize.INTEGER,
        defaultValue:0
        
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cards');
  }
};