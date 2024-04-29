const { calculateFareService } = require('../services');

module.exports={
  registrationController:require('./registration-controller'),
  loginController:require('./login-controller'),
  logoutController:require('./logout-controller'),
  cardController:require('./card-controller'),
  userInfoController:require('./userInfo-controller'),
  stationController:require('./station-controller'),
  calculateFareController:require('./calculateFare-controller'),
  payFareController:require('./payFare-controller')
}