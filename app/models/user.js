// Modelo de ejemplo

function User (opts) {
  if(!opts) opts = {};
  this.username = opts.username || 'therealpablors';
  this.password = opts.password || 'node';
  this.text = opts.text || 'Hola caracola';
  this.twitter = {};
  this.twitter.id = opts.twitterId || '';
  this.twitter.username = opts.twitterUsername || '';
  this.twitter.displayname = opts.twitterDisplayname || '';
  this.twitter.token = opts.twitterToken || '';
  this.twitter.tokenSecret = opts.twitterTokenSecret || '';
  this.twitter.avatar = opts.twitterImage || '';
}

module.exports = User;
