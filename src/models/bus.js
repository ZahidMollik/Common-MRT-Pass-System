'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  bus.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    originStation: {
      type:DataTypes.STRING,
      allowNull:false
    },
    destinationStation: {
      type:DataTypes.STRING,
      allowNull:false
    },
    price:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'bus',
  });
  return bus;
};