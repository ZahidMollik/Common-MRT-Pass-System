const { StatusCodes } = require('http-status-codes');
const {airplaneRepo}=require('../repositories');
const AppError = require('../utils/errors/app-error');
const airplane=new airplaneRepo();

async function addAirplaneInfo(data){
  try {
    if(data.departureAirport===data.arrivalAirport){
      throw new AppError('origin and destination Airport must be different',StatusCodes.BAD_REQUEST);
    }
   const res=await airplane.getAirplane(data);
   if(res){
    throw new AppError('you already added this info',StatusCodes.BAD_REQUEST);
   }
    const response=await airplane.create(data);
    return response;
  } catch (error) {
    console.log(error);
    if (error.statusCode == StatusCodes.BAD_REQUEST) {
      throw new AppError(error.message, error.statusCode);
    }
    throw new AppError('something went wrong',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getAirplanesInfo(data){
  try {
    const response=await airplane.get(data.departureAirport,data.arrivalAirport);
    return response;
  } catch (error) {
    console.log(error);
    throw new AppError('something went wrong while getting airplane info',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}


async function getAllAirplaneInfo(data){
  try {
    const response=await airplane.getAll();
    return response;
  } catch (error) {
    console.log(error);
    throw new AppError('something went wrong while getting all Airplane infos',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function updateAirplaneInfo(id,data){
  try {
    const response=await airplane.update(id,data);
    return response;
  } catch (error) {
    console.log(error);
    throw new AppError('something went wrong',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function deleteAirplaneInfo(id){
  try {
    const response=await airplane.delete(id);
    return response;
  } catch (error) {
    throw new AppError('something went wrong',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports={
  addAirplaneInfo,
  getAirplanesInfo,
  getAllAirplaneInfo,
  updateAirplaneInfo,
  deleteAirplaneInfo
}