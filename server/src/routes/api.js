/**
 * Created by trungquandev.com's author on 16/10/2019.
 * src/routes/api.js
 */
const express = require("express");
const router = express.Router();
const AuthMiddleWare = require("../middleware/AuthMiddleware");
const AuthController = require("../controllers/AuthController");
const FriendController = require("../controllers/FriendController");
const createOrder = require("../controllers/Orders");
const {
  createMeal,
  deleteMealById,
  deleteMealsByListId,
  getMeals,
  getMealById,
  updateMealById,
} = require("../controllers/meals");

/**
 * Init all APIs on your application
 * @param {*} app from express
 */
let initAPIs = (app) => {
  router.post("/meals", createMeal);
  router.get("/meals", getMeals);
  router.get("/meals/:idMeal", getMealById);
  router.put("/meals/:idMeal", updateMealById);
  router.delete("/meals", deleteMealsByListId);
  router.delete("/meals/:idMeal", deleteMealById);
  router.post("/orders", createOrder);
  router.post("/login", AuthController.login);
  router.post("/refresh-token", AuthController.refreshToken);

  // Sử dụng authMiddleware.isAuth trước những api cần xác thực
  router.use(AuthMiddleWare.isAuth);
  // List Protect APIs:
  router.get("/friends", FriendController.friendLists);
  // router.get("/example-protect-api", ExampleController.someAction);

  return app.use("/", router);
};

module.exports = initAPIs;