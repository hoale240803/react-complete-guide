// const mongoose = require('mongoose ')
// import mealsSchema from "./meals";
// import usersSchema from "./users";

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const usersSchema = new mongoose.Schema({
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
});

const mealsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
});

const ordersSchema = new mongoose.Schema(
  {
    customer: {
      type: [usersSchema],
      required: true,
    },
    totalAmount: {
      type: String,
      required: true,
    },
    mealItems: {
      type: [mealsSchema],
      required: true,
    },
  },
  { timestamps: true }
);
const Orders = mongoose.model("Orders", ordersSchema);
module.exports = Orders;
