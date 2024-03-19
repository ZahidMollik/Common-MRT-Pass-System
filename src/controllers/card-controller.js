const { StatusCodes } = require('http-status-codes');
const {cardService}=require('../services');
const { successResponse,errorResponse } = require('../utils/common');

async function cardGenerate(req,res){
  try {
    const card=await cardService.generateCard(req.user);
    successResponse.message="Successfully card generate";
    successResponse.data=card;
    return res.status(StatusCodes.CREATED)
              .json(successResponse);
  } catch (error) {
    errorResponse.error=error;
    return res.status(error.statusCode)
              .json(errorResponse);
  }
}

async function getCardDetails(req,res){
  try {
    const card=await cardService.getCardDetails(req.user);
    successResponse.message="Success";
    successResponse.data=card;
    return res.status(StatusCodes.CREATED)
              .json(successResponse);
  } catch (error) {
    errorResponse.error=error;
    return res.status(error.statusCode)
              .json(errorResponse);
  }
}

module.exports={
  cardGenerate,
  getCardDetails
}