const { StatusCodes } = require('http-status-codes')
const {forgetService}=require('../services')
const { successResponse,errorResponse } = require('../utils/common')

async function forgetPassword(req,res){
  try {
     const response=await forgetService.forgetPassword({
      email:req.body.email,
    })
    successResponse.data=response;
    successResponse.message='reset mail sent Successful';
    return res.status(StatusCodes.OK)
              .json(successResponse);
  } catch (error) {
    errorResponse.error=error;
    return res.status(error.statusCode)
              .json(errorResponse);
  }
}

async function resetPassword(req,res){
  try {
     const response=await forgetService.resetPassword({
      username:req.params.username,
      password:req.body.password,
      token:req.params.token
    })
    successResponse.data=response;
    successResponse.message='password reset Successfully';
    return res.status(StatusCodes.OK)
              .json(successResponse);
  } catch (error) {
    errorResponse.error=error;
    return res.status(error.statusCode)
              .json(errorResponse);
  }
}

module.exports={
  forgetPassword,
  resetPassword
}