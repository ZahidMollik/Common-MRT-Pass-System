const express=require('express');
const {launchController}=require('../../controllers');
const { authMiddleware } = require('../../middlewares');
const router=express.Router();

router.post('/addInfo',authMiddleware,launchController.addLaunchInfo);
router.post('/cabinInfo',authMiddleware,launchController.getCabinInfo);
router.post('/info',authMiddleware,launchController.getLaunchesInfo);
router.get('/',authMiddleware,launchController.getAllLaunchInfo);
router.patch('/:id',authMiddleware,launchController.updateLaunchInfo);
router.delete('/:id',authMiddleware,launchController.deleteLaunchInfo);

module.exports=router;