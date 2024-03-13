const express=require('express');
const registerRoute=require('./register-routes')
const loginRoute=require('./login-route')
const router=express.Router();

router.use('/registration',registerRoute)
router.use('/login',loginRoute)
module.exports=router;