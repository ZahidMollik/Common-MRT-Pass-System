
const {journey}=require('../models');
const crudRepository = require('./crud-repository');

class metroRepo extends crudRepository{

  constructor(){
    super(journey)
  }

  async getHistory(data) {
    const response = await this.model.findAll({
      where:{username:data}
    });
    return response;
  }
 
  
}

module.exports=metroRepo;