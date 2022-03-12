const { GraphQLObjectType, GraphQLString, GraphQLNonNull,GraphQLInt } = require("graphql");

const contactSchema = {
  _id: {
    type: GraphQLString,
  },
  userId: {
    type: GraphQLNonNull(GraphQLString),
  },
  createdAt: {
    type: GraphQLString,
  },
  name: { type: GraphQLNonNull(GraphQLString) },
  phone: { type: GraphQLNonNull(GraphQLInt) },
  email: { type: GraphQLNonNull(GraphQLString) },
};

const contactOptionalSchema = {
  _id: {
    type: GraphQLString,
  },
  createdAt: {
    type: GraphQLString,
  },
  name: { type: GraphQLString },
  phone: { type: GraphQLInt },
  email: { type: GraphQLString },
};

const contactType = new GraphQLObjectType({
  name: "Contact",
  description: "Contact",
  fields: () => ({ ...contactSchema }),
});

module.exports = { contactType, contactSchema, contactOptionalSchema };
