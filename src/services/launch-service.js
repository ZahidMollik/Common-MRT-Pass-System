const { StatusCodes } = require('http-status-codes');
const {launchRepo}=require('../repositories');
const AppError = require('../utils/errors/app-error');
const launch=new launchRepo();

async function addLaunchInfo(data){
  try {
    if(data.originTerminal===data.destinationTerminal){
      throw new AppError('origin and destination terminal must be different',StatusCodes.BAD_REQUEST);
    }
   const res=await launch.getLaunch(data);
   if(res){
    throw new AppError('you already added this info',StatusCodes.BAD_REQUEST);
   }
    const response=await launch.create(data);
    return response;
  } catch (error) {
    console.log(error);
    if (error.statusCode == StatusCodes.BAD_REQUEST) {
      throw new AppError(error.message, error.statusCode);
    }
    throw new AppError('something went wrong',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getCabinInfo(data){
  try {
    const response=await launch.get(data);
    return response;
  } catch (error) {
    console.log(error);
    throw new AppError('something went wrong while getting launches info',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getLaunchesInfo(data){
  try {
    const response=await launch.get(data);
    return response;
  } catch (error) {
    console.log(error);
    throw new AppError('something went wrong while getting launches info',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getAllLaunchInfo(data){
  try {
    const response=await launch.getAll();
    return response;
  } catch (error) {
    console.log(error);
    throw new AppError('something went wrong while getting all launch infos',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function updateLaunchInfo(id,data){
  try {
    const response=await launch.update(id,data);
    return response;
  } catch (error) {
    console.log(error);
    throw new AppError('something went wrong',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function deleteLaunchInfo(id){
  try {
    const response=await launch.delete(id);
    return response;
  } catch (error) {
    throw new AppError('something went wrong',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports={
  addLaunchInfo,
  getCabinInfo,
  getLaunchesInfo,
  getAllLaunchInfo,
  updateLaunchInfo,
  deleteLaunchInfo
}