const { GraphQLNonNull, GraphQLString, GraphQLList } = require("graphql");
const Contact = require("../../models/Contact");
const { contactType } = require("../Schemas/ContactSchema");

const contactQuery = {
  contacts: {
    type: GraphQLList(contactType),
    description: "list of contacts",
    args: {
      userId: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: async (parent, args) => {
      return await Contact.find({ userId: args.userId });
    },
  },
};

module.exports = { contactQuery };
