var express = require('express'),
  router = express.Router();

module.exports = function (app, passport) {

  //GET
  router.get('/profile', function (req, res, next) {
    if (req.isAuthenticated()) {
      res.render('profile', {
        user: req.user
      });
    } else {
      res.redirect('/');
    }
  });

  //Controller
  app.use('/', router);
};


