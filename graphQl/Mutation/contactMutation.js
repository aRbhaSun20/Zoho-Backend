const Contact = require("../../models/Contact");

const jwt = require("jsonwebtoken");
const {
  contactType,
  contactSchema,
  contactOptionalSchema,
} = require("../Schemas/ContactSchema");
const { GraphQLNonNull, GraphQLString } = require("graphql");
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
  editContact: {
    type: contactType,
    description: "Edit Contact",
    args: {
      ...contactOptionalSchema,
    },
    resolve: async (parent, args) => {
      const { _id, ...remaining } = args;
      return await Contact.findOneAndUpdate(
        { _id },
        { $set: { ...remaining } },
        { new: true }
      );
    },
  },
  deleteContact: {
    type: contactType,
    description: "Delete Contact",
    args: {
      _id: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: async (parent, args) => {
      return await Contact.findOneAndRemove({ _id: args._id });
    },
  },
};

module.exports = { contactMutation };
