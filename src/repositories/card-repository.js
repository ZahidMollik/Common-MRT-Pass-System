const crudRepository=require('./crud-repository');
const {card}=require('../models');

class cardRepo extends crudRepository{
  constructor(){
    super(card);
  }
}

module.exports=cardRepo;