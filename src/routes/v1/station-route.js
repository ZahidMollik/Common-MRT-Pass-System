const express=require('express');
const {stationController}=require('../../controllers');
const { authMiddleware,checkAdminMiddleware } = require('../../middlewares');
const router=express.Router();

router.post('/',authMiddleware,checkAdminMiddleware,stationController.addStation);
router.get('/:medium',authMiddleware,stationController.getStationsByMedium);
router.get('/',authMiddleware,stationController.getAllStations);
router.patch('/:id',authMiddleware,checkAdminMiddleware,stationController.updateStation);
router.delete('/:id',authMiddleware,checkAdminMiddleware,stationController.deleteStation);

module.exports=router;