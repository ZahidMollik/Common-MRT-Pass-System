const express=require('express');
const {stationController}=require('../../controllers');
const router=express.Router();

router.get('/:medium',stationController.getStation);
module.exports=router;