const express = require("express"),
  mongoose = require("mongoose"),
  cookieSession = require("cookie-session"),
  passport = require("passport"),
  bodyParser = require("body-parser"),
  keys = require("./config/keys"),
  path = require("path");

require("./models/User");
require("./models/Survey");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();
app.use(bodyParser.json());

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    keys: [keys.cookieKey] //could provide multiple keys which could be used for different cookies
  })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app); //these export a function which we immediately execute
require("./routes/billingRoutes")(app);
require("./routes/surveyRoutes")(app);

if (process.env.NODE_ENV === "production") {
  //if a request that comes in and express doesn't know how to handle it then
  //it will look in this folder.
  app.use(express.static("client/build"));

  //becuase react has html5 user friendly urls, this will be a catch all if
  //we dont understand how to handle the request
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000; //environment variable. Heroku (CI) would do that.
app.listen(PORT);
