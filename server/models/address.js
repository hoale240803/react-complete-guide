const mongoose = require("mongoose ");

mongoose.Promise = global.Promise;
const addressesSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  postalCode: {
    type: Number,
    required: true,
  },
});

const Addresses = mongoose.model("Addresses", addressesSchema);
module.exports = Addresses;
