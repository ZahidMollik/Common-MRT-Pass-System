'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('recharges', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cardnumber: {
        type: Sequelize.STRING,
        allowNull:false,
        references:{
          model:"cards",
          key:"cardnumber"
        }
      },
      transactionId: {
        type: Sequelize.STRING,
        allowNull:false
      },
      amount: {
        type: Sequelize.INTEGER,
        defaultValue:0,
        allowNull:false
      },
      status: {
        type: Sequelize.STRING,
        defaultValue:'false'
      },
      date: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('recharges');
  }
};