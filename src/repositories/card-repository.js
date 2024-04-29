const crudRepository=require('./crud-repository');
const {card}=require('../models');

class cardRepo extends crudRepository{
  constructor(){
    super(card);
  }
 async balanceUpdate(newBalance,cardnumber){
  const response = await card.update(
    { balance: newBalance },
    { where: { cardnumber:cardnumber } }
  );
  return response;
 }
}

module.exports=cardRepo;