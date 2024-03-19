const { v4: uuidv4 } = require('uuid');
const {cardRepo}=require('../repositories');
const AppError = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes');
const {card}=require('../models');
const Card=new cardRepo();

async function generateCard(data){
 try {
  const passCard= await card.findOne({where:{username:data.username}});
  if(passCard){
    throw new AppError('You already generate a card',StatusCodes.BAD_REQUEST);
  }
  const cardNumber=uuidv4().replace(/-/g, '').substring(0,12);
  const newCard=await Card.create({cardnumber:cardNumber,username:data.username});
  return newCard;
 } catch (error) {
  if(error.statusCode==StatusCodes.BAD_REQUEST){
    throw new AppError(error.message,error.statusCode);
  }
  throw new AppError('Something went wrong',StatusCodes.INTERNAL_SERVER_ERROR);
 }
  
}


async function getCardDetails(data){
  try {
    const response=await Card.get(data.username);
    return response;
  } catch (error) {
    if(error.statusCode==StatusCodes.NOT_FOUND){
      throw new AppError(error.message,error.statusCode);
    }
    throw new AppError('Something went wrong',StatusCodes.INTERNAL_SERVER_ERROR);
  }
}

module.exports={
  generateCard,
  getCardDetails
}
