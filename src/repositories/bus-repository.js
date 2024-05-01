const { Op, where } = require('sequelize');
const {bus}=require('../models')

class busRepo{

  async create(data) {
    const response = await bus.create(data);
    return response;
  }

  async getAll() {
    const response = await bus.findAll();
    return response;
  }

  async get(origin,destination) {
    const response = await bus.findAll( {
      where: {
        [Op.and]:[{originStation:origin},{destinationStation:destination}]
       },
    });
    return response;
  }

  async getBus(data) {
    const response = await bus.findOne( {
      where: data
    });
    return response;
  }

  async update(id,data) {
    const response = await bus.update(data,{
      where:{
        id:id
      }
    });
    return response;
  }

  async delete(id) {
    const response = await bus.destroy({
      where:{id:id}
    });
    return response;
  }
  
}

module.exports=busRepo;