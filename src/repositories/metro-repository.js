const { Op } = require('sequelize');
const {metro}=require('../models')

class metroRepo{

  async create(data) {
    const response = await metro.create(data);
    return response;
  }

  async getAll() {
    const response = await metro.findAll();
    return response;
  }

  async getMetro(data) {
    const response = await metro.findOne( {
      where: data
    });
    return response;
  }

  async get(origin,destination) {
    const response = await metro.findOne( {
      where: {
        [Op.and]:[{originStation:origin},{destinationStation:destination}]
       },
    });
    return response;
  }

  async update(id,data) {
    const response = await metro.update(data,{
      where:{
        id:id
      }
    });
    return response;
  }

  async delete(id) {
    const response = await metro.destroy({
      where:{id:id}
    });
    return response;
  }
  
}

module.exports=metroRepo;