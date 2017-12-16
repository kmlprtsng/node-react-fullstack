const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: { type: number, default: 0 }
});

mongoose.model("users", userSchema);
