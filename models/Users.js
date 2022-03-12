const { DateTime } = require("luxon");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  secret: { type: String, required: true },
  createdAt: {
    type: Date,
    default: () => DateTime.now().toString(),
  },
});

module.exports = new mongoose.model("Users", userSchema);
