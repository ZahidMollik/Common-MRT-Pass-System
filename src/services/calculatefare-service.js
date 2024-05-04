const { StatusCodes } = require('http-status-codes');
const {metroRepo,busRepo,airplaneRepo,launchRepo}=require('../repositories');
const AppError = require('../utils/errors/app-error');
const metro=new metroRepo();
const bus=new busRepo();
const airplane=new airplaneRepo();
const launch=new launchRepo();

async function getMetroFare(data){
  try {
    const response=await metro.get(data.originStation,data.destinationStation);
    const totalFare=(response.price*data.numOfPassenger)
    return totalFare;
  } catch (error) {
    throw new AppError('something went wrong while calculating metro fare',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getBusFare(numOfPassenger,data){
  try {
    const response=await bus.getBus(data);
    const totalFare=(response.price*numOfPassenger)
    return totalFare;
  } catch (error) {
    throw new AppError('something went wrong while calculating bus fare',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getAirplaneFare(numOfPassenger,data){
  try {
    const response=await airplane.getAirplane(data);
    const totalFare=(response.price*numOfPassenger)
    return totalFare;
  } catch (error) {
    console.log(error);
    throw new AppError('something went wrong while calculating airplane  fare',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getLaunchFare(numOfPassenger,data){
  try {
    const response=await launch.getLaunch(data);
    const totalFare=(response.price*numOfPassenger)
    return totalFare;
  } catch (error) {
    console.log(error);
    throw new AppError('something went wrong while calculating launch  fare',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports={
  getMetroFare,
  getBusFare,
  getAirplaneFare,
  getLaunchFare
}