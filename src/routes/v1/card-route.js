const express=require('express');
const {cardController}=require('../../controllers');
const {authMiddleware,rechargeMiddleware}=require('../../middlewares');
const router=express.Router();

router.post('/generate',authMiddleware,cardController.cardGenerate);
router.get('/cardInfo',authMiddleware,cardController.getCardDetails);
router.post('/recharge',authMiddleware,rechargeMiddleware,cardController.rechargeCard);
router.post('/recharge/success/:tran_Id',cardController.rechargeSuccess);
router.post('/recharge/fail/:tran_Id',cardController.rechargeFail);
router.get('/rechargehistory',authMiddleware,cardController.getRechargeHistory);
router.delete('/rechargehistory',authMiddleware,cardController.deleteRechargeHistory);

module.exports=router;