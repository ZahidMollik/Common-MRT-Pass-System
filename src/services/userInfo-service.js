const { StatusCodes } = require("http-status-codes");
const { userInfoRepo,registrationRepo } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const userInfo = new userInfoRepo();
const register = new registrationRepo();

async function profileSetup(data) {
  try {
    const User = await userInfo.get(data.username);
    if(User){
      throw new AppError(
        "you already set up the profile please update",
        StatusCodes.BAD_REQUEST
      );
    }
    const user = await userInfo.create(data);
    return user;
  } catch (error) {
    if(error.statusCode==StatusCodes.BAD_REQUEST){
      throw new AppError(error.message,error.statusCode);
    }
    throw new AppError(
      "something went wrong while setting up the user profile",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getUser(data) {
    try {
      const user = await userInfo.get(data);
      return user;
    } catch (error) {
      if(error.statusCode==StatusCodes.NOT_FOUND){
        throw new AppError('user not found',error.statusCode);
      }
      throw new AppError(
        "something went wrong",
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
}

async function updateProfile(username,data) {
  try {
    const user = await userInfo.update(username,data);
    return user;
  } catch (error) {
    throw new AppError(
      "something went wrong while updating the user profile",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function deleteUser(username) {
  try {
    const user = await register.destroy(username);
    return user;
  } catch (error) {
    console.log(error);
    if(error.statusCode==StatusCodes.NOT_FOUND){
      throw new AppError('user not found to delete',error.statusCode);
    }
    throw new AppError(
      "something went wrong",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  profileSetup,
  getUser,
  updateProfile,
  deleteUser
}
