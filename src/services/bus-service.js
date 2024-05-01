const { StatusCodes } = require('http-status-codes');
const {busRepo}=require('../repositories');
const AppError = require('../utils/errors/app-error');
const { query } = require('express');
const bus=new busRepo();

async function addBusInfo(data){
  try {
    if(data.originStation===data.destinationStation){
      throw new AppError('origin and destination station must be different',StatusCodes.BAD_REQUEST);
    }
   const res=await bus.getBus(data);
   if(res){
    throw new AppError('you already added this info',StatusCodes.BAD_REQUEST);
   }
    const response=await bus.create(data);
    return response;
  } catch (error) {
    console.log(error);
    if (error.statusCode == StatusCodes.BAD_REQUEST) {
      throw new AppError(error.message, error.statusCode);
    }
    throw new AppError('something went wrong',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function getBusesInfo(data){
  try {
    const response=await bus.get(data.originStation,data.destinationStation);
    return response;
  } catch (error) {
    console.log(error);
    throw new AppError('something went wrong while getting bus info',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}


async function getAllBusInfo(data){
  try {
    const response=await bus.getAll();
    return response;
  } catch (error) {
    console.log(error);
    throw new AppError('something went wrong while getting all bus infos',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function updateBusInfo(id,data){
  try {
    const response=await bus.update(id,data);
    return response;
  } catch (error) {
    console.log(error);
    throw new AppError('something went wrong',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function deleteBusInfo(id){
  try {
    const response=await bus.delete(id);
    return response;
  } catch (error) {
    throw new AppError('something went wrong',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports={
  addBusInfo,
  getBusesInfo,
  getAllBusInfo,
  updateBusInfo,
  deleteBusInfo
}
