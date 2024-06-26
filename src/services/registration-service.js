const { StatusCodes } = require('http-status-codes');
const {registrationRepo}=require('../repositories');
const AppError = require('../utils/errors/app-error');
const registration=new registrationRepo();

async function createUser(data){
  try {
    const user=await registration.create(data);
    return user;
  } catch (error) {
    if(error.name=='SequelizeValidationError'){
      throw new AppError('The username will be alphanumeric with no spaces.',StatusCodes.BAD_REQUEST);
    }
    if(error.name=='SequelizeUniqueConstraintError'){
      throw new AppError(error.errors[0].message,StatusCodes.BAD_REQUEST);
    }
    throw new AppError('something went wrong while creating a user',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports={
  createUser
}