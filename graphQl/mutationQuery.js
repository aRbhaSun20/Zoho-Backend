const { GraphQLObjectType } = require("graphql");
const { contactMutation } = require("./Mutation/contactMutation");

const { userMutation } = require("./Mutation/userMutation");
require("dotenv").config();

const RootMutationType = new GraphQLObjectType({
  name: "Mutations",
  description: "Root Mutations",
  fields: () => ({
    ...userMutation,
    ...contactMutation
  }),
});

module.exports = RootMutationType;
