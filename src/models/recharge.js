'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recharge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  recharge.init({
    cardnumber: {
      type:DataTypes.STRING,
      allowNull:false
    },
    transactionId: {
      type:DataTypes.STRING,
      allowNull:false
    },
    amount: {
      type:DataTypes.INTEGER,
      defaultValue:0,
      allowNull:false
    },
    status: {
      type:DataTypes.STRING,
      defaultValue:'false'
    },
    date: {
      type:DataTypes.DATE,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'recharge',
  });
  return recharge;
};