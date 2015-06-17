//Métodos para serializar y deserializar al usuario. Necesarios a la hora de usar passport y sesión

module.exports = function (passport) {

    passport.serializeUser(function(user, done) {
        done(null, JSON.stringify(user));
    });

    passport.deserializeUser(function(user, done) {
        return done(null, JSON.parse(user));
    });
};