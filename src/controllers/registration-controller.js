const { StatusCodes } = require('http-status-codes')
const {registrationService}=require('../services')
const { successResponse,errorResponse } = require('../utils/common')

async function createUser(req,res){
  try {
    const user=await registrationService.createUser({
      username:req.body.username,
      email:req.body.email,
      password:req.body.password
    })
    successResponse.data=user;
    successResponse.message='Successfully registration complete';
    return res.status(StatusCodes.CREATED)
              .json(successResponse);
  } catch (error) {
    errorResponse.error=error;
    return res.status(error.statusCode)
              .json(errorResponse);
  }
}

module.exports={
  createUser
}