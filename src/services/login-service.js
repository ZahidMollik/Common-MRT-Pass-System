const { StatusCodes } = require("http-status-codes");
const bcrypt = require("bcrypt");
const { registrationRepo } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const registration = new registrationRepo();

async function loginUser(data) {
  
  try {
    const user = await registration.get(data.username);
    const validation = await bcrypt.compare(data.password, user.password);
    if(!validation){
      throw new AppError('invalid',StatusCodes.UNAUTHORIZED);
    }
    return user;
  } catch (error) {
    if(error.statusCode==StatusCodes.NOT_FOUND){
      throw new AppError('user is not registered',error.statusCode);
    }
    if(error.statusCode==StatusCodes.UNAUTHORIZED){
      throw new AppError('invalid password',error.statusCode);
    }
    throw new AppError('Something went wrong',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports = {
  loginUser,
};
