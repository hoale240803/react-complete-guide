const jwtHelper = require("../helpers/jwt.helper");
const debug = console.log.bind(console);
const User = require("../models/users");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

const register = async (req, res) => {
  try {
    // Create a new user
    let hashedPassword = await bcrypt.hash(req.body.password, 8);
    const user = new User({
      _id: mongoose.Types.ObjectId(),
      firstName: req.body.firstName,
      email: req.body.email,
      password: hashedPassword,
      role: req.body.role,
    });
    //save registered info into db
    await user.save();
    //generate a token and response user info + token
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (error) {
    console.log(error.message);
    res.status(400).send(error);
  }
};

const login_v1 = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findByCredentials(email, password);
    if (!user) {
      return res
        .status(401)
        .send({ error: "Login failed! Check authentication credentials" });
    }
    const newToken = await user.generateAuthToken();
    res.send({ user, newToken });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  register: register,
  login_v1: login_v1,
};
