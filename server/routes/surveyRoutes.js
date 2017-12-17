const requireLogin = require("./../middlewares/requireLogin"),
  requireCredits = require("./../middlewares/requireCredits"),
  mongoose = require("mongoose"),
  Survey = mongoose.model("surveys"),
  Mailer = require("../services/Mailer"),
  surveyTemplate = require("../services/emailTemplates/surveyTemplate");

module.exports = app => {
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients.split(",").map(email => ({
        email: email.trim()
      })),
      _user: req.body.user.id,
      dateSent: Date.now()
    });

    //send the survey

    const mailer = new Mailer(survey, surveyTemplate(survey));
  });
};
