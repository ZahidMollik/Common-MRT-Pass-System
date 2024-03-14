const express=require('express');
const {registrationController}=require('../../controllers');
const {registrationMiddleware}=require('../../middlewares');
const router=express.Router();

router.post('/',registrationMiddleware,registrationController.createUser);
module.exports=router;