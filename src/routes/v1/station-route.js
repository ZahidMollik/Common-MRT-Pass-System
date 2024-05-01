const express=require('express');
const {stationController}=require('../../controllers');
const router=express.Router();

router.post('/',stationController.addStation);
router.get('/:medium',stationController.getStations);
router.get('/',stationController.getAllStations);
router.patch('/:id',stationController.updateStation);
router.delete('/:id',stationController.deleteStation);

module.exports=router;