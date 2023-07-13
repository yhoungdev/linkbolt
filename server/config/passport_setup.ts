const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const dotenv = require('dotenv').config();

const auth_user = (request: Request, accessToken: string, refreshToken: string, profile: any, done: any) => {
    return done(null, profile);
  };

passport.use(new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/api/google/login",
    passReqToCallback: true,
    session: true
  },
  auth_user
));

module.exports = passport;


