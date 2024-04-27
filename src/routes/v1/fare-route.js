const express=require('express');
const {calculateFareController}=require('../../controllers');
const router=express.Router();

router.post('/metro',calculateFareController.getMetroFare);
module.exports=router;