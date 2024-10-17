const { errorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");

function checkAdmin(req,res,next){
  const Role=req.user?.role;
  if (!Role) {
    errorResponse.error = new AppError(
      "Access denied",
      StatusCodes.UNAUTHORIZED
    );
    return res.json(errorResponse)
  }

  if (Role !== 'admin') {
    errorResponse.error = new AppError(
      "Access denied",
      StatusCodes.FORBIDDEN
    );
    return res.json(errorResponse)
  }

  next(); 
}

module.exports=checkAdmin;