const sendgrid = require("sendgrid"),
  helper = sendgrid.mail, //sendgrid refer to mail as helper in docs
  keys = require("../config/keys");

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super(); //invoke Mail constructor

    this.from_email = new helper.Email("no-replay@emaily.com");
    this.subject = subject;
    this.body = new helper.Content("text/html", content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body); //this makes it neat rather omitting this.body
    this.addClickTracking();
    this.addRecipients();
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => new helper.Email(email));
  }

  addClickTracking() {
    const trackingSettings = new helper.TrackingSettings();
    trackingSettings.setClickTracking(new helper.ClickTracking(true, true));

    this.addTrackingSettings(trackingSettings);
  }

  addRecipients() {}
}

module.exports = Mailer;
