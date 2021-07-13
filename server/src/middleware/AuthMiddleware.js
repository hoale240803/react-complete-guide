const jwt = require("jsonwebtoken");
const AUTH_CONSTANTS = require("../constants/AuthenConstants");
const User = require("../models/users");

const auth_v1 = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const data = jwt.verify(token, AUTH_CONSTANTS.SECRET);
    //FIND IN MONGODB, HAVING 'ID OBJECT' AND 'TOKEN' SENT BY CLIENT
    const user = await User.findOne({ _id: data._id, "tokens.token": token });
    if (!user) {
      throw new Error();
    }
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    console.log("Error:", error);
    res.status(401).send({ error: "Not authorized to access this resource" });
  }
};
module.exports = {
  auth_v1: auth_v1,
};
