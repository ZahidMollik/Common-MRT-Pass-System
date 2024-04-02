const {v4: uuidv4}=require('uuid');
const {ServerConfig}=require('../config');
const { StatusCodes } = require('http-status-codes');
const {cardService}=require('../services');
const { successResponse,errorResponse } = require('../utils/common');

async function cardGenerate(req,res){
  try {
    const card=await cardService.generateCard(req.user);
    successResponse.message="Successfully card generate";
    successResponse.data=card;
    return res.status(StatusCodes.CREATED)
              .json(successResponse);
  } catch (error) {
    errorResponse.error=error;
    return res.status(error.statusCode)
              .json(errorResponse);
  }
}

async function getCardDetails(req,res){
  try {
    const card=await cardService.getCardDetails(req.user);
    successResponse.message="Success";
    successResponse.data=card;
    return res.status(StatusCodes.CREATED)
              .json(successResponse);
  } catch (error) {
    errorResponse.error=error;
    return res.status(error.statusCode)
              .json(errorResponse);
  }
}
async function rechargeCard(req,res){
  try {
    const tran_Id= uuidv4();
    const data = {
      cardnumber:req.body.cardnumber,
      total_amount: req.body.amount,
      currency: 'BDT',
      tran_id: tran_Id,
      success_url: `http://localhost:${ServerConfig.PORT}/api/v1/card/recharge/fail/${tran_Id}`,
      fail_url:`http://localhost:${ServerConfig.PORT}/api/v1/card/recharge/fail/${tran_Id}`,
      shipping_method: 'server',
      product_name: 'MRTPASS',
      product_category: 'card',
      product_profile: 'general',
      cus_name: req.user.username,
      cus_email: req.user.email,
      cus_add1: 'Dhaka',
      cus_add2: 'Dhaka',
      cus_city: 'Dhaka',
      cus_state: 'Dhaka',
      cus_postcode: '1216',
      cus_country: 'Bangladesh',
      cus_phone: '01711111111',
      ship_name: 'Dhaka',
      ship_add1: 'Dhaka',
      ship_add2: 'Dhaka',
      ship_city: 'Dhaka',
      ship_state: 'Dhaka',
      ship_postcode: '1216',
      ship_country: 'Bangladesh',
    };
    const storeData={
      cardnumber:req.body.cardnumber,
      transactionId:tran_Id,
      amount:req.body.amount,
      date:new Date()
    }
    const response=await cardService.rechargeCard(data,storeData);
    successResponse.message="Success";
    return res.status(StatusCodes.OK)
              .json(response);
  } catch (error) {
    errorResponse.error=error;
    return res.status(error.statusCode)
              .json(errorResponse);;
  }
}

async function rechargeSuccess(req,res){
  const response=await cardService.rechargeSuccess(req.params.tran_Id,{status:'true'});
  res.redirect(`${process.env.ORIGIN}/card/recharge/success/${req.params.tran_Id}`);
}

async function rechargeFail(req,res){
  res.redirect(`${process.env.ORIGIN}/card/recharge/fail/${req.params.tran_Id}`);
}

async function getRechargeHistory(req,res){
  try {
    const card=await cardService.getCardDetails(req.user);
    const rechargeHistory=await cardService.getRechargeHistory(card.dataValues.cardnumber);
    successResponse.message="Success";
    successResponse.data=rechargeHistory;
    return res.status(StatusCodes.OK)
              .json(successResponse);
  } catch (error) {
    errorResponse.error=error;
    return res.status(error.statusCode)
              .json(errorResponse);
  }
}

async function deleteRechargeHistory(req,res){
  try {
    const card=await cardService.getCardDetails(req.user);
    const response=await cardService.deleteRechargeHistory(card.dataValues.cardnumber);
    successResponse.message="Success";
    successResponse.data=response;
    return res.status(StatusCodes.OK)
              .json(successResponse);
  } catch (error) {
    errorResponse.error=error;
    return res.status(error.statusCode)
              .json(errorResponse);
  }
}

module.exports={
  cardGenerate,
  getCardDetails,
  rechargeCard,
  rechargeSuccess,
  rechargeFail,
  getRechargeHistory,
  deleteRechargeHistory
}