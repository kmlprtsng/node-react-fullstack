const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (acccessToken, refreshToken, profile, done ) => {
      //access token allows us to do stuff with users
      //profile that they have given us access to.
      //e.g read emails etc.
      console.log(acccessToken);
    }
  )
);