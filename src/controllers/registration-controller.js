const { StatusCodes } = require('http-status-codes')
const bcrypt=require('bcrypt');
const {registrationService}=require('../services')
const { successResponse,errorResponse } = require('../utils/common')

async function createUser(req,res){
  const hashpassword=await bcrypt.hash(req.body.password,10);
  try {
    const user=await registrationService.createUser({
      username:req.body.username,
      email:req.body.email,
      password:hashpassword
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