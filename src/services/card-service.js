const { v4: uuidv4 } = require("uuid");
const SSLCommerzPayment = require("sslcommerz-lts");
const { cardRepo, rechargeRepo } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");
const { card, recharge } = require("../models");
const Card = new cardRepo();
const Recharge = new rechargeRepo();
const store_id = process.env.STORE_ID;
const store_passwd = process.env.STORE_PASSD;
const is_live = false;

async function generateCard(data) {
  try {
    const passCard = await card.findOne({ where: { username: data.username } });
    if (passCard) {
      throw new AppError(
        "You already generate a card",
        StatusCodes.BAD_REQUEST
      );
    }
    const cardNumber = uuidv4().replace(/-/g, "").substring(0, 12);
    const newCard = await Card.create({
      cardnumber: cardNumber,
      username: data.username,
    });
    return newCard;
  } catch (error) {
    if (error.statusCode == StatusCodes.BAD_REQUEST) {
      throw new AppError(error.message, error.statusCode);
    }
    throw new AppError(
      "Something went wrong",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getCardDetails(data) {
  try {
    const response = await Card.get(data.username);
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

async function rechargeCard(data, storeData) {
  try {
    const response = await Recharge.create(storeData);
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    let apiResponse = await sslcz.init(data);
    return apiResponse.GatewayPageURL;
  } catch (error) {
    throw new AppError(
      "Failed to initialize payment: ",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function rechargeSuccess(tran_Id, data) {
  try {
    const response = await Recharge.update(tran_Id, data);
    const cardInfo = await recharge.findOne({
      where: {
        transactionId: tran_Id,
      },
    });
    const cardDetails = await card.findOne({
      where: { cardnumber: cardInfo.dataValues.cardnumber },
    });
    const newBalance =cardDetails.dataValues.balance + cardInfo.dataValues.amount;
    const updateBalance = await card.update(
      { balance: newBalance },
      { where: { cardnumber: cardInfo.dataValues.cardnumber } }
    );
  } catch (error) {
    throw new AppError(
      "something went wrong while updating the balance",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function getRechargeHistory(data) {
  try {
    const response = await Recharge.getHistory(data);
    return response;
  } catch (error) {
    throw new AppError(
      "something went wrong",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

async function deleteRechargeHistory(data) {
  try {
    const response = await Recharge.deleteHistory(data);
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

module.exports = {
  generateCard,
  getCardDetails,
  rechargeCard,
  rechargeSuccess,
  getRechargeHistory,
  deleteRechargeHistory
};
