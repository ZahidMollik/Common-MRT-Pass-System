const { Op, where } = require('sequelize');
const {launch}=require('../models')

class launchRepo{

  async create(data) {
    const response = await launch.create(data);
    return response;
  }

  async getAll() {
    const response = await launch.findAll();
    return response;
  }

  async get(data) {
    const response = await launch.findAll( {
       where:data 
    });
    return response;
  }

  async getLaunch(data) {
    const response = await launch.findOne( {
      where: data
    });
    return response;
  }

  async update(id,data) {
    const response = await launch.update(data,{
      where:{
        id:id
      }
    });
    return response;
  }

  async delete(id) {
    const response = await launch.destroy({
      where:{id:id}
    });
    return response;
  }
  
}

module.exports=launchRepo;