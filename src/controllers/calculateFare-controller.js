const { StatusCodes } = require('http-status-codes')
const {calculateFareService}=require('../services')
const { successResponse,errorResponse } = require('../utils/common')

async function getMetroFare(req,res){
  try {
    const Fare=await calculateFareService.getMetroFare({
      originStation:req.body.originStation,
      destinationStation:req.body.destinationStation,
      numOfPassenger:req.body.numOfPassenger
    })
    successResponse.data=Fare;
    successResponse.message='Successfully complete';
    return res.status(StatusCodes.OK)
              .json(successResponse);
  } catch (error) {
    errorResponse.error=error;
    return res.status(error.statusCode)
              .json(errorResponse);
  }
}

async function getBusFare(req,res){
  try {
    const numOfPassenger=req.body.numOfPassenger
    const Fare=await calculateFareService.getBusFare(numOfPassenger,{
      name:req.body.name,
      originStation:req.body.originStation,
      destinationStation:req.body.destinationStation,
    })
    successResponse.data=Fare;
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
  getMetroFare,
  getBusFare
}