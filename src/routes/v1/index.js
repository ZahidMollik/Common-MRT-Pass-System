const express=require('express');
const registerRoute=require('./register-routes');
const loginRoute=require('./login-route');
const logoutRoute=require('./logout-route');
const cardRoute=require('./card-route');
const userInfoRoute=require('./userInfo-routes');
const stationRoute=require('./station-route');
const fareRoute=require('./fare-route')
const busRoute=require('./bus-route')
const airplaneRoute=require('./airplane-route')
const launchRoute=require('./launch-route')
const metroRoute=require('./metro-route')
const forgetRoute=require('./forgetpass-route')
const QRRoute=require('./qr-route')
const router=express.Router();

router.use('/registration',registerRoute);
router.use('/login',loginRoute);
router.use('/logout',logoutRoute);
router.use('/password',forgetRoute);
router.use('/card',cardRoute);
router.use('/users',userInfoRoute);
router.use('/stations',stationRoute);
router.use('/fare',fareRoute)
router.use('/services/buses',busRoute)
router.use('/services/airplanes',airplaneRoute)
router.use('/services/launches',launchRoute)
router.use('/services/metros',metroRoute)
router.use('/QRCode',QRRoute)

module.exports=router;