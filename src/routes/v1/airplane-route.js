const express=require('express');
const {airplaneController}=require('../../controllers');
const { authMiddleware } = require('../../middlewares');
const router=express.Router();

router.post('/addInfo',authMiddleware,airplaneController.addAirplaneInfo);
router.post('/info',authMiddleware,airplaneController.getAirplanesInfo);
router.get('/',authMiddleware,airplaneController.getAllAirplaneInfo);
router.patch('/:id',authMiddleware,airplaneController.updateAirplaneInfo);
router.delete('/:id',authMiddleware,airplaneController.deleteAirplaneInfo);

module.exports=router;