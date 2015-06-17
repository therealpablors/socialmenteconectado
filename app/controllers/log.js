var express = require('express'),
  router = express.Router();

module.exports = function (app, passport) {

  //GET
  router.get('/in', function (req, res, next) {
    res.render('login', { message: req.flash('loginMessage') });
  });

  router.get('/out', function (req, res, next) {
    req.logout();
    res.redirect('/');
  });

  //POST
  router.post('/in', passport.authenticate('local-login', {
    successRedirect : '/profile',
    failureRedirect : '/log/in',
    failureFlash : true
  }));

  //Controller
  app.use('/log', router);
};


