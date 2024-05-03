'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  airplane.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    departureAirport:{
      type:DataTypes.STRING,
      allowNull:false
    },
    arrivalAirport: {
      type:DataTypes.STRING,
      allowNull:false
    },
    departureTime:{
      type:DataTypes.DATE,
      allowNull:false
    },
    arrivalTime: {
      type:DataTypes.DATE,
      allowNull:false
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'airplane',
  });
  return airplane;
};