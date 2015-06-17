var LocalStrategy = require('passport-local').Strategy,
    config = require('../config'),
    User = require(config.root + '/app/models/user');

module.exports = function (passport) {
  passport.use('local-login',
    new LocalStrategy ({
        passReqToCallback: true
    },
      function (req, username, password, done) {
        var user = new User();
        if (user.username === username) {
          if (user.password === password) {
            return done(null, user);
          } else {
            return done(null, false, req.flash('loginMessage', 'La contraseña es incorrecta'));
          }
        } else {
          return done(null, false, req.flash('loginMessage', 'El usuario no existe'));
        }
      })
  )
};