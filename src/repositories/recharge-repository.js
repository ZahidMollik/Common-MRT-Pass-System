const crudRepository=require('./crud-repository');
const {recharge}=require('../models');
const AppError = require('../utils/errors/app-error');
const { StatusCodes } = require('http-status-codes');
class rechargeRepo extends crudRepository{
  constructor(){
    super(recharge);
  }

  async update(tran_Id, data) {
    const response = await recharge.update(data, {
      where: { transactionId: tran_Id },
    });
    return response;
  }

  async getHistory( cardnumber) {
    const response = await recharge.findAll( {
      where: { cardnumber: cardnumber },
    });
    return response;
  }

  async deleteHistory( cardnumber) {
    const response = await recharge.destroy( {
      where: { cardnumber: cardnumber },
    });
    if(!response){
      throw new AppError('No recharge history found to delete',StatusCodes.NOT_FOUND);
    }
    return response;
  }

  
}

module.exports=rechargeRepo;