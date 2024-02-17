'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class registration extends Model {
    
    static associate(models) {
      
    }
  }
  registration.init({
    username: {
      type: DataTypes.STRING,
      allowNull:false,
      unique:true,
      primaryKey:true
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false
    },
    password:{
      type: DataTypes.STRING,
      allowNull:false
    },
  }, {
    sequelize,
    modelName: 'registration',
  });
  return registration;
};