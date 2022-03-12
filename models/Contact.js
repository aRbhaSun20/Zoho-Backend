const { DateTime } = require("luxon");
const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: { type: String, required: true },
  userId: { type: String, required: true },
  createdAt: {
    type: Date,
    default: () => DateTime.now().toString(),
  },
});

module.exports = new mongoose.model("Contacts", contactSchema);
