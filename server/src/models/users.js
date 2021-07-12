const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const usersSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    salt: {
      type: String,
      required: true,
    },
    loginFailedCount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const UserSchema = mongoose.model("Users", usersSchema);
module.exports = UserSchema;
