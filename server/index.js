const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

const app = express();

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

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"] //what access to info we want
  })
);

app.get("/auth/google/callback", passport.authenticate("google"));

const PORT = process.env.PORT || 5000; //environment variable. Heroku (CI) would do that.
app.listen(PORT);
