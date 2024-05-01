const express=require('express');
const {calculateFareController,payFareController}=require('../../controllers');
const { authMiddleware } = require('../../middlewares');
const router=express.Router();

router.post('/calculate',calculateFareController.getMetroFare);
router.post('/pay',authMiddleware,payFareController.payFare);
router.get('/payhistory',authMiddleware,payFareController.payFareHistory);
router.delete('/payhistory/delete',authMiddleware,payFareController.deletepayFareHistory);

module.exports=router;