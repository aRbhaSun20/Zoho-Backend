const { GraphQLNonNull, GraphQLString, GraphQLList } = require("graphql");
const Users = require("../../models/Users");
const { userType } = require("../Schemas/UserSchema");
const jwt = require("jsonwebtoken")

const userQuery = {
  user: {
    type: userType,
    description: "login user",
    args: {
      user: { type: GraphQLNonNull(GraphQLString) },
      password: { type: GraphQLNonNull(GraphQLString) },
    },
    resolve: async (parent, args) => {
      const user = await Users.findOne({ name: args.user });

      if (!user) {
        throw new Error("No user with that email");
      }
      if (args.password === user._doc.password) {
        const token = jwt.sign(
          { _id: user._id, email: user.email, password: user.password },
          process.env.ACCESS_TOKEN_SECRET
        );

        return { ...user._doc, token };
      } else {
        throw new Error("Incorrect password");
      }
    },
  },
};

module.exports = { userQuery };
