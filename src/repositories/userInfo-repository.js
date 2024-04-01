const crudRepository=require('./crud-repository');
const {userInfo}=require('../models');

class userInfoRepo extends crudRepository{
  constructor(){
    super(userInfo);
  }
}

module.exports=userInfoRepo;