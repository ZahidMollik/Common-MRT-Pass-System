const express=require('express');
const registerRoute=require('./register-routes');
const loginRoute=require('./login-route');
const logoutRoute=require('./logout-route');
const cardRoute=require('./card-route');
const router=express.Router();

router.use('/registration',registerRoute);
router.use('/login',loginRoute);
router.use('/logout',logoutRoute);
router.use('/card',cardRoute);

module.exports=router;