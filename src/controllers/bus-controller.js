const { StatusCodes } = require('http-status-codes')
const {busService}=require('../services')
const { successResponse,errorResponse } = require('../utils/common')

async function addBusInfo(req,res){
  try {
    const response=await busService.addBusInfo({
      name:req.body.name,
      originStation:req.body.originStation,
      destinationStation:req.body.destinationStation,
      price:req.body.price
    })
    successResponse.data=response;
    successResponse.message='Successfully complete';
    return res.status(StatusCodes.CREATED)
              .json(successResponse);
  } catch (error) {
    errorResponse.error=error;
    return res.status(error.statusCode)
              .json(errorResponse);
  }
}

async function getBusesInfo(req,res){
  try {
    const response=await busService.getBusesInfo({
      originStation:req.body.originStation,
      destinationStation:req.body.destinationStation,
    })
    successResponse.data=response;
    successResponse.message='Successfully complete';
    return res.status(StatusCodes.OK)
              .json(successResponse);
  } catch (error) {
    errorResponse.error=error;
    return res.status(error.statusCode)
              .json(errorResponse);
  }
}


async function getAllBusInfo(req,res){
  try {
    const response=await busService.getAllBusInfo()
    successResponse.data=response;
    successResponse.message='Successfully complete';
    return res.status(StatusCodes.OK)
              .json(successResponse);
  } catch (error) {
    errorResponse.error=error;
    return res.status(error.statusCode)
              .json(errorResponse);
  }
}

async function updateBusInfo(req,res){
  try {
    const response=await busService.updateBusInfo(req.params.id,{
      name:req.body.name,
      originStation:req.body.originStation,
      destinationStation:req.body.destinationStation,
      price:req.body.price
    })
    successResponse.data=response;
    successResponse.message='Successfully complete';
    return res.status(StatusCodes.OK)
              .json(successResponse);
  } catch (error) {
    errorResponse.error=error;
    return res.status(error.statusCode)
              .json(errorResponse);
  }
}

async function deleteBusInfo(req,res){
  try {
    const response=await busService.deleteBusInfo(req.params.id)
    successResponse.data=response;
    successResponse.message='Successfully complete';
    return res.status(StatusCodes.OK)
              .json(successResponse);
  } catch (error) {
    errorResponse.error=error;
    return res.status(error.statusCode)
              .json(errorResponse);
  }
}

module.exports={
  addBusInfo,
  getBusesInfo,
  getAllBusInfo,
  updateBusInfo,
  deleteBusInfo
}