const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users"); //fetch model class

passport.serializeUser((user, done) => {
  done(null, user.id); //this id is not the googleId but the mongo id.
});

passport.deserializeUser((userId, done) => {
  User.findById(userId).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    (acccessToken, refreshToken, profile, done) => {
      //access token allows us to do stuff with users profile that they have given us access to. e.g read emails etc.

      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (!existingUser) {
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }

        done(null, existingUser); //null for nothing went wrong and return the existing user.
      });
    }
  )
);
