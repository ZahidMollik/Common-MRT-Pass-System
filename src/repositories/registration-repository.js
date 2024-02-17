const crudRepository=require('./crud-repository');
const {registration}=require('../models');

class registrationRepo extends crudRepository{
  constructor(){
    super(registration);
  }
}

module.exports=registrationRepo;