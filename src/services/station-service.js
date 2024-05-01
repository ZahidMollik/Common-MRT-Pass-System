const { StatusCodes } = require('http-status-codes');
const {stationRepo}=require('../repositories');
const AppError = require('../utils/errors/app-error');
const station=new stationRepo();

async function addStation(data){
  try {
    
   const res=await station.getStation(data.name,data.transport_medium);
   if(res){
    throw new AppError('you already added this info',StatusCodes.BAD_REQUEST);
   }
    const response=await station.create(data);
    return response;
  } catch (error) {
    console.log(error);
    if (error.statusCode == StatusCodes.BAD_REQUEST) {
      throw new AppError(error.message, error.statusCode);
    }
    throw new AppError('something went wrong',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getStations(data){
  try {
    const response=await station.get(data);
    return response;
  } catch (error) {
    throw new AppError('something went wrong while getting stations',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getAllStations(data){
  try {
    const response=await station.getAll(data);
    return response;
  } catch (error) {
    throw new AppError('something went wrong while getting stations',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function updateStation(id,data){
  try {
    const response=await station.update(id,data);
    return response;
  } catch (error) {
    throw new AppError('something went wrong while updating station',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function deleteStation(id){
  try {
    const response=await station.delete(id);
    return response;
  } catch (error) {
    console.log(error);
    throw new AppError('something went wrong',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}



module.exports={
  addStation,
  getStations,
  getAllStations,
  updateStation,
  deleteStation
}