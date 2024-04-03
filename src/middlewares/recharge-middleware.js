const {StatusCodes}=require('http-status-codes');
const {errorResponse}=require('../utils/common');
const AppError=require('../utils/errors/app-error');

function validateRechargeReq(req,res,next){
  if(!req.body.cardnumber){
    errorResponse.error=new AppError('Cardnumber not found in your request',StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST)
              .json(errorResponse);
  }
  if(!req.body.amount){
    errorResponse.error=new AppError('Amount not found in your request',StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST)
              .json(errorResponse);
  }
  next();
}

module.exports=validateRechargeReq;