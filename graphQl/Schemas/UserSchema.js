const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLFloat,
} = require("graphql");

const userSchema = {
  _id: {
    type: GraphQLString,
  },

  email: {
    type: GraphQLNonNull(GraphQLString),
    description: "Email of User",
  },
  createdAt: {
    type: GraphQLString,
    description: "Created User At",
  },
  password: {
    type: GraphQLNonNull(GraphQLString),
    description: "Password of User",
  },
  token: {
    type: GraphQLString,
    description: "token for user",
  },
  secret: {
    type: GraphQLNonNull(GraphQLString),
    description: "secret for user",
  },
};

const userOptionalSchema = {
  _id: {
    type: GraphQLNonNull(GraphQLString),
  },
  email: {
    type: GraphQLString,
    description: "Email of User",
  },
  password: {
    type: GraphQLString,
    description: "Name of User",
  },
  createdAt: {
    type: GraphQLString,
    description: "Created User At",
  },
  token: {
    type: GraphQLString,
    description: "token for user",
  },
  secret: {
    type: GraphQLString,
    description: "secret for user",
  },
};

const userType = new GraphQLObjectType({
  name: "User",
  description: "Users",
  fields: () => ({ ...userSchema }),
});

module.exports = { userType, userSchema, userOptionalSchema };
