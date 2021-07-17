// import Order from "../models/orders";
// const mongoose = require('mongoose ')

const Order = require("../models/orders");
const mongoose = require("mongoose");

function createOrders(req, res) {
  const order = new Order({
    _id: mongoose.Types.ObjectId(),
    mealItems: req.body.mealItems,
    customer: req.body.customer,
    totalAmount: req.body.totalAmount,
    created: req.body.created,
  });

  return order
    .save()
    .then((newOrder) => {
      console.log(" A ORDER CREATED");
      return res.status(201).json({
        success: true,
        message: "New order created successfully",
        Order: newOrder,
      });
    })
    .catch((err) => {
      console.log("Error:::", err);
      return res.status(500).json({
        success: false,
        message: "Server error. Please try again!",
        error: err.message,
      });
    });
}

module.exports = createOrders;
