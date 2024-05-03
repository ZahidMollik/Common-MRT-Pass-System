const { Op, where } = require('sequelize');
const {airplane}=require('../models')

class airplaneRepo{

  async create(data) {
    const response = await airplane.create(data);
    return response;
  }

  async getAll() {
    const response = await airplane.findAll();
    return response;
  }

  async get(origin,destination) {
    const response = await airplane.findAll( {
      where: {
        [Op.and]:[{departureAirport:origin},{arrivalAirport:destination}]
       },
    });
    return response;
  }

  async getAirplane(data) {
    const response = await airplane.findOne( {
      where: data
    });
    return response;
  }

  async update(id,data) {
    const response = await airplane.update(data,{
      where:{
        id:id
      }
    });
    return response;
  }

  async delete(id) {
    const response = await airplane.destroy({
      where:{id:id}
    });
    return response;
  }
  
}

module.exports=airplaneRepo;