const { StatusCodes } = require('http-status-codes')
const {launchService}=require('../services')
const { successResponse,errorResponse } = require('../utils/common')

async function addLaunchInfo(req,res){
  try {
    const response=await launchService.addLaunchInfo({
      name:req.body.name,
      originTerminal:req.body.originTerminal,
      destinationTerminal:req.body.destinationTerminal,
      cabinType:req.body.cabinType,
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

async function getCabinInfo(req,res){
  try {
    const response=await launchService.getLaunchesInfo({
      originTerminal:req.body.originTerminal,
      destinationTerminal:req.body.destinationTerminal,
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
async function getLaunchesInfo(req,res){
  try {
    const response=await launchService.getLaunchesInfo({
      originTerminal:req.body.originTerminal,
      destinationTerminal:req.body.destinationTerminal,
      cabinType:req.body.cabinType
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


async function getAllLaunchInfo(req,res){
  try {
    const response=await launchService.getAllLaunchInfo()
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

async function updateLaunchInfo(req,res){
  try {
    const response=await launchService.updateLaunchInfo(req.params.id,{
      name:req.body.name,
      originTerminal:req.body.originTerminal,
      destinationTerminal:req.body.destinationTerminal,
      cabinType:req.body.cabinType,
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

async function deleteLaunchInfo(req,res){
  try {
    const response=await launchService.deleteLaunchInfo(req.params.id)
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
  addLaunchInfo,
  getCabinInfo,
  getLaunchesInfo,
  getAllLaunchInfo,
  updateLaunchInfo,
  deleteLaunchInfo
}