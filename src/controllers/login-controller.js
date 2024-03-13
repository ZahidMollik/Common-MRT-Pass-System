const { StatusCodes } = require('http-status-codes')
const jwt=require('jsonwebtoken')
const {loginService}=require('../services')
const { successResponse,errorResponse } = require('../utils/common')

async function loginUser(req,res){
  try {
     const user=await loginService.loginUser({
      username:req.body.username,
      password:req.body.password
    })
    const payload={
      username:user.username,
      email:user.email
    }
    console.log(user.email);
    const token=jwt.sign(payload,process.env.SECRETKEY);
    res.cookie('jwt',token,{httpOnly:true,maxAge:10000000})
    return res.status(StatusCodes.OK)
              .json(successResponse);
  } catch (error) {
    errorResponse.error=error;
    return res.status(error.statusCode)
              .json(errorResponse);
  }
}

module.exports={
  loginUser
}