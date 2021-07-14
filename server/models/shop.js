import usersSchema from "./users";
const mongoose = require("mongoose ");
import addressesSchema from "./address";

mongoose.Promise = global.Promise;
const shopsSchema = new mongoose.Schema({
  nameShop: {
    type: String,
    required: true,
  },
  location: {
    type: [addressesSchema],
    required: true,
  },
  license: {
    type: String,
    required: true,
  },
  owner: {
    type: [usersSchema],
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Shops", shopsSchema);
