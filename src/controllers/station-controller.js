const { StatusCodes } = require('http-status-codes')
const {stationService}=require('../services')
const { successResponse,errorResponse } = require('../utils/common')

async function addStation(req,res){
  try {
    const medium=(req.body.transport_medium).toLowerCase();
    const response=await stationService.addStation({
      name:req.body.name,
      transport_medium:medium,
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

async function getStations(req,res){
  try {
    const stations=await stationService.getStations(req.params.medium)
    successResponse.data=stations;
    successResponse.message='Successfully complete';
    return res.status(StatusCodes.OK)
              .json(successResponse);
  } catch (error) {
    errorResponse.error=error;
    return res.status(error.statusCode)
              .json(errorResponse);
  }
}

async function getAllStations(req,res){
  try {
    const stations=await stationService.getAllStations()
    successResponse.data=stations;
    successResponse.message='Successfully complete';
    return res.status(StatusCodes.OK)
              .json(successResponse);
  } catch (error) {
    errorResponse.error=error;
    return res.status(error.statusCode)
              .json(errorResponse);
  }
}

async function updateStation(req,res){
  try {
    const medium=(req.body.transport_medium).toLowerCase();
    const response=await stationService.updateStation(req.params.id,{
      name:req.body.name,
      transport_medium:medium,
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

async function deleteStation(req,res){
  try {
    const stations=await stationService.deleteStation(req.params.id)
    successResponse.data=stations;
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
  addStation,
  getStations,
  getAllStations,
  updateStation,
  deleteStation
}