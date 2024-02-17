const express=require('express');
const registerRoute=require('./register-routes')
const router=express.Router();

router.use('/registration',registerRoute)
module.exports=router;