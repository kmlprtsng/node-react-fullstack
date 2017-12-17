const sendgrid = require("sendgrid"),
  helper = sendgrid.mail, //sendgrid refer to mail as helper in docs
  keys = require("../config/keys");

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super(); //invoke Mail constructor

    this.sgApi = sendgrid(keys.sendGridKey);
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

  addRecipients() {
    const personlize = new helper.Personalization();
    this.recipients.forEach(recipient => {
      personlize.addTo(recipient);
    });
    this.addPersonalization(personlize);
  }

  async send() {
    const request = this.sgApi.emptyRequest({
      method: "POST",
      path: "/v3/mail/send",
      body: this.toJSON()
    });

    const response = await this.sgApi.API(request);
    return response;
  }
}

module.exports = Mailer;
