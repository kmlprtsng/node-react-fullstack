const express = require("express"),
  mongoose = require("mongoose"),
  cookieSession = require("cookie-session"),
  passport = require("passport"),
  keys = require("./config/keys");

require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [keys.cookieKey] //could provide multiple keys which could be used for different cookies
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000; //environment variable. Heroku (CI) would do that.
app.listen(PORT);
