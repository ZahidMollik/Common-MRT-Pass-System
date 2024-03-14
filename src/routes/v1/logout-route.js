const express=require('express');
const {logoutController}=require('../../controllers');
const router=express.Router();

router.post('/',logoutController);
module.exports=router;