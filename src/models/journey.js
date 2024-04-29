'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class journey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  journey.init({
    transportName: {
      type:DataTypes.STRING,
      allowNull:false
    },
    username: {
      type:DataTypes.STRING,
      allowNull:false
    },
    originStation:{
      type:DataTypes.STRING,
      allowNull:false
    },
    destinationStation: {
      type:DataTypes.STRING,
      allowNull:false
    },
    numOfPassenger:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    transportMedium: {
      type:DataTypes.STRING,
      allowNull:false
    },
    cabinType: {
      type:DataTypes.STRING,
    },
    fare: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'journey',
  });
  return journey;
};