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
      primaryKey:true,
      validate:{
        isAlphanumeric:true,
        notEmpty:true,
        notContains:' '
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    password:{
      type: DataTypes.STRING,
      allowNull:false
    },
    role: {
      type: DataTypes.ENUM('admin', 'user'),
      allowNull: false,
      defaultValue: 'user',
    }
  }, {
    sequelize,
    modelName: 'registration',
  });
  return registration;
};