const { StatusCodes } = require('http-status-codes');
const {metroRepo}=require('../repositories');
const AppError = require('../utils/errors/app-error');
const metro=new metroRepo();

async function getMetroFare(data){
  try {
    const response=await metro.get(data.originStation,data.destinationStation);
    const totalFare=(response.price*data.numOfPassenger)
    return totalFare;
  } catch (error) {
    throw new AppError('something went wrong while geting stations',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports={
  getMetroFare
}