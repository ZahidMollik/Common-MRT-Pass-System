const { StatusCodes } = require('http-status-codes');
const {PORT}=require('../config/server-config')
const { registration } = require('../models');
const AppError = require("../utils/errors/app-error");
const bcrypt=require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

async function forgetPassword(data) {
  try {
    const User = await registration.findOne({ where: { email: data.email } });
    if (!User) {
      throw new AppError(
        "User not found",
        StatusCodes.NOT_FOUND
      );
    }
      
    const token = jwt.sign({ password: User.password }, process.env.SECRETKEY, { expiresIn: "5m" });
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.USERGMAIL,
        pass: process.env.PASS
      }
    });
        
    const mailOptions = {
      from: process.env.USERGMAIL,
      to: data.email,
      subject: 'Reset Password Link',
      text: `http://localhost:${PORT}/api/v1/password/reset_password/${User.username}/${token}`
    };
        
    const response=transporter.sendMail(mailOptions);
    return response;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(error.message, error.statusCode);
    }
    throw new AppError(
      "Something went wrong",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}


async function resetPassword(data) {
  try {
    const valid = jwt.verify(data.token, process.env.SECRETKEY);
    const hashpassword= await bcrypt.hash(data.password,10);
    const updatePass=await registration.update({password:hashpassword},{where:{
      username:data.username
    }});
    return updatePass;
  } catch (error) {
    if (error.name == 'JsonWebTokenError') {
      throw new AppError(
        "Invalid token",
        StatusCodes.BAD_REQUEST
      );
    }
    throw new AppError(
      "Something went wrong",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
    
  }
}

module.exports = {
  forgetPassword,
  resetPassword
};
