
const {journey}=require('../models');
const crudRepository = require('./crud-repository');

class metroRepo extends crudRepository{

  constructor(){
    super(journey)
  }
 
  
}

module.exports=metroRepo;