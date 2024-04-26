const { StatusCodes } = require('http-status-codes');
const {stationRepo}=require('../repositories');
const AppError = require('../utils/errors/app-error');
const station=new stationRepo();

async function getStation(data){
  try {
    const response=await station.get(data);
    return response;
  } catch (error) {
    // if(error.name=='SequelizeValidationError'){
    //   throw new AppError('The username will be alphanumeric with no spaces.',StatusCodes.BAD_REQUEST);
    // }
    // if(error.name=='SequelizeUniqueConstraintError'){
    //   throw new AppError('This username is already used',StatusCodes.BAD_REQUEST);
    // }
    throw new AppError('something went wrong while geting stations',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports={
  getStation
}