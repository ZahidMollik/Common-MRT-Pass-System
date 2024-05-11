const express=require('express');
const {forgetpassController}=require('../../controllers');
const router=express.Router();

router.post('/forget-password',forgetpassController.forgetPassword);
router.post('/reset_password/:username/:token',forgetpassController.resetPassword);
module.exports=router;