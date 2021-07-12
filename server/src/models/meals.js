const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const mealsSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
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
const Meals = mongoose.model("Meals", mealsSchema);
module.exports = Meals;
