const { StatusCodes } = require('http-status-codes')
const {AirplaneService}=require('../services')
const { successResponse,errorResponse } = require('../utils/common')

async function addAirplaneInfo(req,res){
  try {
    const response=await AirplaneService.addAirplaneInfo({
      name:req.body.name,
      departureAirport:req.body.departureAirport,
      arrivalAirport:req.body.arrivalAirport,
      departureTime:req.body.departureTime,
      arrivalTime:req.body.arrivalTime,
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

async function getAirplanesInfo(req,res){
  try {
    const response=await AirplaneService.getAirplanesInfo({
      departureAirport:req.body.departureAirport,
      arrivalAirport:req.body.arrivalAirport,
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


async function getAllAirplaneInfo(req,res){
  try {
    const response=await AirplaneService.getAllAirplaneInfo()
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

async function updateAirplaneInfo(req,res){
  try {
    const response=await AirplaneService.updateAirplaneInfo(req.params.id,{
      name:req.body.name,
      departureAirport:req.body.departureAirport,
      arrivalAirport:req.body.arrivalAirport,
      departureTime:req.body.departureTime,
      arrivalTime:req.body.arrivalTime,
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

async function deleteAirplaneInfo(req,res){
  try {
    const response=await AirplaneService.deleteAirplaneInfo(req.params.id)
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
  addAirplaneInfo,
  getAirplanesInfo,
  getAllAirplaneInfo,
  updateAirplaneInfo,
  deleteAirplaneInfo
}