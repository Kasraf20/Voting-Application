const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  aadharNumber: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
  },
  role: {
    type: String,
    enum: ["voter", "admin"],
    default: "voter ",
  },
  isVoted: {
    type: Boolean,
    default: false,
  },
  voteCount: {
    type: Number,
    default: 0
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
