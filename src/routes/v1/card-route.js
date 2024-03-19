const express=require('express');
const {cardController}=require('../../controllers');
const {authMiddleware}=require('../../middlewares');
const router=express.Router();

router.post('/generate',authMiddleware,cardController.cardGenerate);
router.get('/cardInfo',authMiddleware,cardController.getCardDetails);

module.exports=router;