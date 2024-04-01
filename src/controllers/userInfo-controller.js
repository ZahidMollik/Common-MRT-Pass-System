const { StatusCodes } = require('http-status-codes')
const {userInfoService}=require('../services')
const { successResponse,errorResponse } = require('../utils/common')

async function profileSetup(req,res){

  try {
    const user=await userInfoService.profileSetup({
      username:req.user.username,
      FullName:req.body.FullName,
      phoneNumber:req.body.phoneNumber,
      dateOfBirth:req.body.dateOfBirth,
      address:req.body.address,
      postCode:req.body.postCode
    })
    successResponse.data=user;
    successResponse.message='Profile setup Successful';
    return res.status(StatusCodes.CREATED)
              .json(successResponse);
  } catch (error) {
    errorResponse.error=error;
    return res.status(error.statusCode)
              .json(errorResponse);
  }
}

async function getUser(req,res){

  try {
    const user=await userInfoService.getUser(req.user.username)
    successResponse.data=user;
    successResponse.message='Success';
    return res.status(StatusCodes.OK)
              .json(successResponse);
  } catch (error) {
    errorResponse.error=error;
    return res.status(error.statusCode)
              .json(errorResponse);
  }
}

async function updateProfile(req,res){

  try {
    const user=await userInfoService.updateProfile(req.user.username,{
      FullName:req.body.FullName,
      phoneNumber:req.body.phoneNumber,
      dateOfBirth:req.body.dateOfBirth,
      address:req.body.address,
      postCode:req.body.postCode
    })
    successResponse.data=user;
    successResponse.message='Profile updated Successfully';
    return res.status(StatusCodes.OK)
              .json(successResponse);
  } catch (error) {
    errorResponse.error=error;
    return res.status(error.statusCode)
              .json(errorResponse);
  }
}

async function deleteUser(req,res){

  try {
    const user=await userInfoService.deleteUser(req.user.username)
    successResponse.data=user;
    successResponse.message='Success';
    res.cookie('jwt','',{maxAge:0});
    return res.status(StatusCodes.OK)
              .json(successResponse);
  } catch (error) {
    errorResponse.error=error;
    return res.status(error.statusCode)
              .json(errorResponse);
  }
}

module.exports={
  profileSetup,
  getUser,
  updateProfile,
  deleteUser
}