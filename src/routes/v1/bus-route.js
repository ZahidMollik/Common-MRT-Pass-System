const express=require('express');
const {busController}=require('../../controllers');
const { authMiddleware,checkAdminMiddleware } = require('../../middlewares');
const router=express.Router();

router.post('/addInfo',authMiddleware,checkAdminMiddleware,busController.addBusInfo);
router.post('/info',authMiddleware,busController.getBusesInfo);
router.get('/',authMiddleware,busController.getAllBusInfo);
router.patch('/:id',authMiddleware,checkAdminMiddleware,busController.updateBusInfo);
router.delete('/:id',authMiddleware,checkAdminMiddleware,busController.deleteBusInfo);

module.exports=router;