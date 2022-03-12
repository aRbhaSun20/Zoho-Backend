const { GraphQLObjectType } = require("graphql");
const { contactQuery } = require("./Queries/contactQuery");
const { userQuery } = require("./Queries/userQuery");

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "root query",
  fields: () => ({
    ...userQuery,
    ...contactQuery
  }),
});

module.exports = RootQueryType;
