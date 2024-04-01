'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userInfo.init({
    username: {
      type:DataTypes.STRING,
      allowNull:false
    },
    FullName: {
      type:DataTypes.STRING,
      allowNull:false
    },
    phoneNumber: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    dateOfBirth: {
      type:DataTypes.DATE,
      allowNull:false
    },
    address: {
      type:DataTypes.STRING,
      allowNull:false
    },
    postCode: {
      type:DataTypes.INTEGER,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'userInfo',
  });
  return userInfo;
};