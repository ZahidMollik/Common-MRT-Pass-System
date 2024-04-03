const express=require('express');
const {userInfoController}=require('../../controllers');
const {authMiddleware,userInfoMiddleware}=require('../../middlewares');
const router=express.Router();

router.post('/profile',authMiddleware,userInfoMiddleware,userInfoController.profileSetup);
router.get('/profile',authMiddleware,userInfoController.getUser);
router.patch('/profile/update',authMiddleware,userInfoController.updateProfile);
router.delete('/',authMiddleware,userInfoController.deleteUser);

module.exports=router;