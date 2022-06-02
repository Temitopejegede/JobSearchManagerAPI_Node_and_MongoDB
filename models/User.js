const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    match: [
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/,
      "Please provide a valid email address",
    ],
    unique: true,
  },
  name: {
    type: String,
    required: [true, "Please provide password"],
    minlength: 6,
    maxlength: 12,
  },
});

module.exports = mongoose.model("User", userSchema);
