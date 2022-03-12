const Users = require("../../models/Users");
const { userOptionalSchema, userSchema, userType } = require("../Schemas/UserSchema");
const { GraphQLNonNull, GraphQLString } = require("graphql");

const jwt = require("jsonwebtoken");
require("dotenv").config();

const userMutation = {
  signUpUser: {
    type: userType,
    description: "SignUp User",
    args: {
      ...userSchema,
    },
    resolve: async (parent, args) => {
      const user = await new Users({ ...args }).save();
      if (user) {
        const token = jwt.sign(
          { _id: user._id, email: user.email, password: user.password },
          process.env.ACCESS_TOKEN_SECRET
        );

        return { ...user._doc, token };
      }
      throw new Error("Error in user creation");
    },
  },
};

module.exports = { userMutation };
