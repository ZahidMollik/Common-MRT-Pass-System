const {StatusCodes}=require('http-status-codes');
const {errorResponse}=require('../utils/common');
const AppError=require('../utils/errors/app-error');

function validateRegReq(req,res,next){
  if(!req.body.username){
    errorResponse.error=new AppError('username not found in the request',StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST)
              .json(errorResponse);
  }
  if(!req.body.email){
    errorResponse.error=new AppError('user email not found in the request',StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST)
              .json(errorResponse);
  }
  if(!req.body.password){
    errorResponse.error=new AppError('user password not found in the request',StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST)
              .json(errorResponse);
  }
  next();
}

module.exports=validateRegReq;