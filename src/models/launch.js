'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class launch extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  launch.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false
    },
    originTerminal: {
      type:DataTypes.STRING,
      allowNull:false
    },
    destinationTerminal: {
      type:DataTypes.STRING,
      allowNull:false
    },
    cabinType: {
      type:DataTypes.STRING,
      allowNull:false
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'launch',
  });
  return launch;
};