const express=require('express');
const {calculateFareController,payFareController}=require('../../controllers');
const { authMiddleware } = require('../../middlewares');
const router=express.Router();

router.post('/calculate/metro',authMiddleware,calculateFareController.getMetroFare);
router.post('/calculate/bus',authMiddleware,calculateFareController.getBusFare);
router.post('/calculate/airplane',authMiddleware,calculateFareController.getAirplaneFare);
router.post('/calculate/launch',authMiddleware,calculateFareController.getLaunchFare);
router.post('/pay',authMiddleware,payFareController.payFare);
router.get('/payhistory',authMiddleware,payFareController.payFareHistory);
router.delete('/payhistory/delete',authMiddleware,payFareController.deletepayFareHistory);

module.exports=router;