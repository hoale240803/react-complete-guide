const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const AUTH_CONST = require("../constants/AuthenConstants");

mongoose.Promise = global.Promise;

const usersSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: (value) => {
        if (!validator.isEmail(value)) {
          throw new Error({ error: "Invalid Email address" });
        }
      },
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    phone: {
      type: Number,
    },
    role: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
    },
    loginFailedCount: {
      type: Number,
    },
  },
  { timestamps: true }
);

// usersSchema.pre("save", async function (next) {
//   // Hash the password before saving the user model
//   const user = this;
//   if (user.isModified("password")) {
//     user.password = await bcrypt.hash(user.password, 8);
//   }
//   next();
// });
usersSchema.methods.generateAuthToken = async function () {
  // Generate an auth token for the user
  const user = this;
  // const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY);
  const token = jwt.sign({ _id: user._id }, AUTH_CONST.SECRET, {
    algorithm: "HS256",
    expiresIn: AUTH_CONST.TOKEN_LIFE,
  });
  // console.log("TOKEN CREATED", token);
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};
// usersSchema.methods.generateRefreshToken = async function () {
//   // Generate an auth token for the user
//   const user = this;
//   // const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY);
//   const token = jwt.sign(
//     { _id: user._id },
//     AUTH_CONST.SECRET_REFRESH,
//     AUTH_CONST.REFRESH_TOKEN_LIFE
//   );
//   user.tokens = user.tokens.concat({ token });
//   await user.save();
//   return token;
// };

usersSchema.statics.findByCredentials = async (email, password) => {
  // Search for a user by email and password.
  const user = await UserSchema.findOne({ email });
  if (!user) {
    throw new Error({ error: "Invalid login credentials" });
  }
  //check the password encrypted by bcrypt is valid or not
  const isPasswordMatch = await bcrypt.compare(password, user.password);
  if (!isPasswordMatch) {
    throw new Error({ error: "Invalid login credentials" });
  }
  return user;
};
const UserSchema = mongoose.model("Users", usersSchema);
module.exports = UserSchema;
