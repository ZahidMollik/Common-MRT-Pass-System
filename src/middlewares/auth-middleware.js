const jwt = require("jsonwebtoken");
const { errorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");

function checkForAuthentication(req, res, next) {
  const cookieToken = req.cookies['jwt'];
  req.user = null;
  if (!cookieToken) {
    errorResponse.error = new AppError(
      "Access denied",
      StatusCodes.UNAUTHORIZED
    );
    return res.json(errorResponse)
  }
  const user = jwt.verify(cookieToken, process.env.SECRETKEY);
  if (!user) {
    errorResponse.error = new AppError(
      "Access denied",
      StatusCodes.FORBIDDEN
    );
    return res.json(errorResponse)
  }
  req.user = user;
  next();
}

module.exports = checkForAuthentication;
