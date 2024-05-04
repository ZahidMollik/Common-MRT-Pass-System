const { StatusCodes } = require('http-status-codes')
const {metroService}=require('../services')
const { successResponse,errorResponse } = require('../utils/common')

async function addMetroInfo(req,res){
  try {
    const response=await metroService.addMetroInfo({
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

async function getMetrosInfo(req,res){
  try {
    const response=await metroService.getMetrosInfo({
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


async function getAllMetroInfo(req,res){
  try {
    const response=await metroService.getAllMetroInfo()
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

async function updateMetroInfo(req,res){
  try {
    const response=await metroService.updateMetroInfo(req.params.id,{
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

async function deleteMetroInfo(req,res){
  try {
    const response=await metroService.deleteMetroInfo(req.params.id)
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
  addMetroInfo,
  getMetrosInfo,
  getAllMetroInfo,
  updateMetroInfo,
  deleteMetroInfo
}