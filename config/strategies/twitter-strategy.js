var TwitterStrategy = require('passport-twitter').Strategy,
    config = require('../config'),
    User = require(config.root + '/app/models/user');

module.exports = function (passport) {
  passport.use(new TwitterStrategy({
        consumerKey: config.social.twitter.consumerKey,
        consumerSecret: config.social.twitter.consumerSecret,
        callbackURL: config.social.twitter.callbackURL
      },
      function (token, tokenSecret, profile, done) {
        var user = new User({
          twitterImage: profile._json.profile_image_url,
          twitterId: profile.id,
          twitterUsername: profile.username,
          twitterDisplayname: profile.displayName,
          twitterToken: token,
          twitterTokenSecret: tokenSecret
        });
        return done(null, user);
      }
  ));

};
