const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = app => {
  app.post("/api/stripe", async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits",
      source: req.body.id
    });
  });

  req.user.credits += 5;
  //we send the new user becuase it is the most up to date in the database and 
  //there is no good reason to use the req.user as there is a possibility that 
  //it is no the most up to date.
  const user = await req.user.save();

  res.send(user);
};
