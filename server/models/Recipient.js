const mongoose = require("mongoose"),
  { Schema } = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false } //has this person responded yet.
});

module.exports = recipientSchema;
