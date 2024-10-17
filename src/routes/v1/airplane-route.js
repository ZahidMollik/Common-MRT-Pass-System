const express=require('express');
const {airplaneController}=require('../../controllers');
const { authMiddleware,checkAdminMiddleware } = require('../../middlewares');
const router=express.Router();

router.post('/addInfo',authMiddleware,checkAdminMiddleware,airplaneController.addAirplaneInfo);
router.post('/info',authMiddleware,airplaneController.getAirplanesInfo);
router.post('/departingInfo',authMiddleware,airplaneController.getDepartureTimeInfo);
router.get('/',authMiddleware,airplaneController.getAllAirplaneInfo);
router.patch('/:id',authMiddleware,checkAdminMiddleware,airplaneController.updateAirplaneInfo);
router.delete('/:id',authMiddleware,checkAdminMiddleware,airplaneController.deleteAirplaneInfo);

module.exports=router;