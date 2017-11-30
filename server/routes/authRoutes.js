const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"] //what access to info we want
    })
  );

  //this route is set in the google console. If this route is called directly and ?code query string is not present
  //then it will try to redirect to google for authentication and fail
  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/user/current", (req, res) => {
    res.send(req.user);
  });

  app.get("/api/logout", (req, res) => {
    req.logout(); //logout function is attached by passport to request.
    res.send(req.user);
  });
};
