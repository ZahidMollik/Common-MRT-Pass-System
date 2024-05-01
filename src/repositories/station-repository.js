const { Op } = require('sequelize');
const {station}=require('../models')

class stationRepo{

  async create(data) {
    const response = await station.create(data);
    return response;
  }

  async getAll() {
    const response = await station.findAll();
    return response;
  }

  async get(transport_medium) {
    const response = await station.findAll( {
      where: { transport_medium: transport_medium },
    });
    return response;
  }
  async getStation(name,transport_medium) {
    const response = await station.findOne({
      where: {
        [Op.and]:[{name:name},{ transport_medium: transport_medium }]
    }

    })
    return response;
  }

  async update(id,data) {
    const response = await station.update(data,{
      where:{
        id:id
      }
    });
    return response;
  }

  async delete(id) {
    const response = await station.destroy({
      where:{id:id}
    });
    return response;
  }


}

module.exports=stationRepo;