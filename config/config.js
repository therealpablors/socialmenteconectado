var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'socialmenteconectado'
    },
    social: {
      twitter: {
        consumerKey: '0PPMyGpMjEIIAcAijSSl84rhW',
        consumerSecret: 'eRBJ3Ju9mj5f2qTosjdFm2UwosIYqawKgas8hRiH4nQjQGc6FO',
        callbackURL: 'http://127.0.0.1:3000/auth/twitter/callback'
      }
    },
    port: 3000
  },

  test: {
    root: rootPath,
    app: {
      name: 'socialmenteconectado'
    },
    port: 3000
  },

  production: {
    root: rootPath,
    app: {
      name: 'socialmenteconectado'
    },
    port: 3000
  }
};

module.exports = config[env];
