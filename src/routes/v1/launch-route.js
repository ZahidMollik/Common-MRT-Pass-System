const express=require('express');
const {launchController}=require('../../controllers');
const { authMiddleware,checkAdminMiddleware } = require('../../middlewares');
const router=express.Router();

router.post('/addInfo',authMiddleware,checkAdminMiddleware,launchController.addLaunchInfo);
router.post('/cabinInfo',authMiddleware,launchController.getCabinInfo);
router.post('/info',authMiddleware,launchController.getLaunchesInfo);
router.get('/',authMiddleware,launchController.getAllLaunchInfo);
router.patch('/:id',authMiddleware,checkAdminMiddleware,launchController.updateLaunchInfo);
router.delete('/:id',authMiddleware,checkAdminMiddleware,launchController.deleteLaunchInfo);

module.exports=router;