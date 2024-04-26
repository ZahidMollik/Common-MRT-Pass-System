const express=require('express');
const registerRoute=require('./register-routes');
const loginRoute=require('./login-route');
const logoutRoute=require('./logout-route');
const cardRoute=require('./card-route');
const userInfoRoute=require('./userInfo-routes');
const stationRoute=require('./station-route');
const router=express.Router();

router.use('/registration',registerRoute);
router.use('/login',loginRoute);
router.use('/logout',logoutRoute);
router.use('/card',cardRoute);
router.use('/users',userInfoRoute);
router.use('/stations',stationRoute)
module.exports=router;