const { StatusCodes } = require('http-status-codes')
const {payFareService}=require('../services')
const { successResponse,errorResponse } = require('../utils/common')

async function payFare(req,res){
  
  try {
    const response=await payFareService.payFare({
      transportName:req.body.transportName,
      username:req.user.username,
      originStation:req.body.originStation,
      destinationStation:req.body.destinationStation,
      numOfPassenger:req.body.numOfPassenger,
      transportMedium:req.body.transportMedium,
      cabinType:req.body.cabinType,
      fare:req.body.fare
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

async function payFareHistory(req,res){
  
  try {
    const response=await payFareService.payFareHistroy(req.user.username)
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

async function deletepayFareHistory(req,res){
  
  try {
    const response=await payFareService.deletePayFareHistory(req.user.username)
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
  payFare,
  payFareHistory,
  deletepayFareHistory
}