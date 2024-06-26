const { StatusCodes } = require('http-status-codes');
const QRcode=require('qrcode');
const {v4: uuidv4}=require('uuid')
const {journeyRepo,cardRepo}=require('../repositories');
const AppError = require('../utils/errors/app-error');
const journey=new journeyRepo();
const card=new cardRepo();
async function payFare(data){
  try {

    const  cardInfo=await card.get(data.username);
    if(cardInfo.balance<data.fare){
      throw new AppError('insufficient Balance',StatusCodes.BAD_REQUEST);
    }
    const newBalance=cardInfo.balance-data.fare;
    const updateBalance = await card.balanceUpdate(newBalance,cardInfo.cardnumber);
    const verifyToken=uuidv4().substring(0, 12);
    data.code=verifyToken;
    const response=await journey.create(data);
    const qrInfo='192.168.0.199:8000/api/v1'+'/QRCode'+`/${verifyToken}`
    
    const qrcodeUrl=await QRcode.toDataURL(qrInfo);
    return qrcodeUrl;
  } catch (error) {
    console.log(error);
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError("Please generate a card first", error.statusCode);
    }
    if (error.statusCode == StatusCodes.BAD_REQUEST) {
      throw new AppError(error.message, error.statusCode);
    }
    throw new AppError('something went wrong while creating journey',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function payFareHistroy(data){
  try {
    const response=await journey.getHistory(data);
    return response
  } catch (error) {
    throw new AppError('something went wrong while geting journey history',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

async function deletePayFareHistory(data) {
  try {
    const response = await journey.destroy(data);
    return response;
  } catch (error) {
    if (error.statusCode == StatusCodes.NOT_FOUND) {
      throw new AppError(error.message, error.statusCode);
    }
    throw new AppError(
      "something went wrong",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports={
  payFare,
  payFareHistroy,
  deletePayFareHistory
}