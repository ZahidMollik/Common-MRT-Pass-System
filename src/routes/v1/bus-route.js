const express=require('express');
const {busController}=require('../../controllers');
const { authMiddleware } = require('../../middlewares');
const router=express.Router();

router.post('/addInfo',authMiddleware,busController.addBusInfo);
router.post('/info',authMiddleware,busController.getBusesInfo);
router.get('/',authMiddleware,busController.getAllBusInfo);
router.patch('/:id',authMiddleware,busController.updateBusInfo);
router.delete('/:id',authMiddleware,busController.deleteBusInfo);

module.exports=router;