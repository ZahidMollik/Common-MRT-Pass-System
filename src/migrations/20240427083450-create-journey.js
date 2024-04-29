'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('journeys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      transportName: {
        type: Sequelize.STRING,
        allowNull:false
      },
      
      username: {
        type: Sequelize.STRING,
        allowNull:false,
        references: {
          model: "registrations",
          key: "username",
        },
        onDelete: "cascade",
      },
      originStation: {
        type: Sequelize.STRING,
        allowNull:false
      },
      destinationStation: {
        type: Sequelize.STRING,
        allowNull:false
      },
      numOfPassenger: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      transportMedium: {
        type: Sequelize.STRING,
        allowNull:false
      },
      cabinType: {
        type: Sequelize.STRING,
      },
      fare: {
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
    await queryInterface.dropTable('journeys');
  }
};