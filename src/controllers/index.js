const { calculateFareService } = require('../services');

module.exports={
  registrationController:require('./registration-controller'),
  loginController:require('./login-controller'),
  logoutController:require('./logout-controller'),
  forgetpassController:require('./forgetpass-controller'),
  cardController:require('./card-controller'),
  userInfoController:require('./userInfo-controller'),
  stationController:require('./station-controller'),
  calculateFareController:require('./calculateFare-controller'),
  payFareController:require('./payFare-controller'),
  busController:require('./bus-controller'),
  airplaneController:require('./airplane-controller'),
  launchController:require('./launch-controller'),
  metroController:require('./metro-controller'),
  qrController:require('./qr-controller')
}