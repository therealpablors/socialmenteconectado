var express = require('express'),
  router = express.Router();

module.exports = function (app, passport) {

  //GET
  router.get('/twitter', passport.authenticate('twitter'));

  router.get('/twitter/callback', passport.authenticate('twitter', {
    successRedirect  :  '/profile',
    failureRedirect :  '/log/in'
  }));

  //Controller
  app.use('/auth', router);
};


