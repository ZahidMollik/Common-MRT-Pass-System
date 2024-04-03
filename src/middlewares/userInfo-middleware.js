const {StatusCodes}=require('http-status-codes');
const {errorResponse}=require('../utils/common');
const AppError=require('../utils/errors/app-error');

function validateUserProfileReq(req,res,next){
  if(!req.body.FullName){
    errorResponse.error=new AppError('FullName not found in your request',StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST)
              .json(errorResponse);
  }
  if(!req.body.phoneNumber){
    errorResponse.error=new AppError('Phone Number not found in your request',StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST)
              .json(errorResponse);
  }

  if(!req.body.dateOfBirth){
    errorResponse.error=new AppError('DateOfBirth not found in your request',StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST)
              .json(errorResponse);
  }

  if(!req.body.address){
    errorResponse.error=new AppError('Address not found in your request',StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST)
              .json(errorResponse);
  }

  if(!req.body.postCode){
    errorResponse.error=new AppError('Post Code not found in your request',StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST)
              .json(errorResponse);
  }
  next();
}

module.exports=validateUserProfileReq;