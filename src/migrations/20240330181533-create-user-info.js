'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userInfos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull:false,
        references:{
          model:"registrations",
          key:"username"
        },
        onDelete:'cascade'
      },
      FullName: {
        type: Sequelize.STRING,
        allowNull:false,
        
      },
      phoneNumber: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      dateOfBirth: {
        type: Sequelize.DATE,
        allowNull:false
      },
      address: {
        type: Sequelize.STRING,
        allowNull:false
      },
      postCode: {
        type: Sequelize.INTEGER,
        allowNull:false
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
    await queryInterface.dropTable('userInfos');
  }
};