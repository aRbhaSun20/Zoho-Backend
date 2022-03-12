const Contact = require("../../models/Contact");

const jwt = require("jsonwebtoken");
const { contactType, contactSchema } = require("../Schemas/ContactSchema");
require("dotenv").config();

const contactMutation = {
  createContact: {
    type: contactType,
    description: "Create Contact",
    args: {
      ...contactSchema,
    },
    resolve: async (parent, args) => {
      const contact = await new Contact({ ...args }).save();
      if (contact) {
        return contact;
      }
      throw new Error("Error in contact creation");
    },
  },
};

module.exports = { contactMutation };
