const { StatusCodes } = require('http-status-codes')
const {QRservice}=require('../services')
const { successResponse,errorResponse } = require('../utils/common')

async function ScanQR(req,res){
  try {
    const response=await QRservice.ScanQR(req.params.token);
    return res.status(StatusCodes.OK)
              .json(response);
  } catch (error) {
    errorResponse.error=error;
    return res.status(error.statusCode)
              .json(errorResponse.error.explanation);
  }
}

module.exports={
  ScanQR
}