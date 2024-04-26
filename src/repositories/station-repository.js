const {station}=require('../models')

class stationRepo{
  async get(transport_medium) {
    const response = await station.findAll( {
      where: { transport_medium: transport_medium },
    });
    return response;
  }
}

module.exports=stationRepo;