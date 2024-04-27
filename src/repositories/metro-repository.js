const { Op } = require('sequelize');
const {metro}=require('../models')

class metroRepo{

  async get(origin,destination) {
    const response = await metro.findOne( {
      where: {
        [Op.and]:[{originStation:origin},{destinationStation:destination}]
       },
    });
    return response;
  }
  
}

module.exports=metroRepo;