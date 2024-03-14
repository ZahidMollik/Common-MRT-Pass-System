const { StatusCodes } = require("http-status-codes");
const { successResponse } = require("../utils/common");

function logout(req,res){
  res.cookie('jwt','',{maxAge:0});
  return res.status(StatusCodes.OK)
            .json(successResponse)
}
module.exports=logout;
