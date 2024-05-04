const { StatusCodes } = require('http-status-codes');
const {metroRepo}=require('../repositories');
const AppError = require('../utils/errors/app-error');
const metro=new metroRepo();

async function addMetroInfo(data){
  try {
    if(data.originStation===data.destinationStation){
      throw new AppError('origin and destination station must be different',StatusCodes.BAD_REQUEST);
    }
   const res=await metro.getMetro(data);
   if(res){
    throw new AppError('you already added this info',StatusCodes.BAD_REQUEST);
   }
    const response=await metro.create(data);
    return response;
  } catch (error) {
    console.log(error);
    if (error.statusCode == StatusCodes.BAD_REQUEST) {
      throw new AppError(error.message, error.statusCode);
    }
    throw new AppError('something went wrong',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getMetrosInfo(data){
  try {
    const response=await metro.get(data.originStation,data.destinationStation);
    return response;
  } catch (error) {
    console.log(error);
    throw new AppError('something went wrong while getting metro info',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}


async function getAllMetroInfo(data){
  try {
    const response=await metro.getAll();
    return response;
  } catch (error) {
    console.log(error);
    throw new AppError('something went wrong while getting all metro infos',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function updateMetroInfo(id,data){
  try {
    const response=await metro.update(id,data);
    return response;
  } catch (error) {
    console.log(error);
    throw new AppError('something went wrong',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function deleteMetroInfo(id){
  try {
    const response=await metro.delete(id);
    return response;
  } catch (error) {
    throw new AppError('something went wrong',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports={
  addMetroInfo,
  getMetrosInfo,
  getAllMetroInfo,
  updateMetroInfo,
  deleteMetroInfo
}
