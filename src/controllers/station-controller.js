const { StatusCodes } = require('http-status-codes')
const {stationService}=require('../services')
const { successResponse,errorResponse } = require('../utils/common')

async function getStation(req,res){
  try {
    const stations=await stationService.getStation(req.params.medium)
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
  getStation
}