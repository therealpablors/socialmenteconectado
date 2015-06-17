var express = require('express'),
  router = express.Router();

module.exports = function (app, passport) {

  //GET
  router.get('/', function (req, res, next) {
    res.render('index');
  });

  //Controller
  app.use('/', router);
};


