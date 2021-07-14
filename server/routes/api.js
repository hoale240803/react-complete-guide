const express = require("express");
const router = express.Router();
const AuthMiddleWare = require("../middleware/AuthMiddleware");
const AuthController = require("../controllers/AuthController");
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
  // AUTHENTICATION
  // router.use(AuthMiddleWare.auth_v1);
  router.post("/users/register", AuthController.register);
  router.post("/users/login_v1", AuthController.login_v1);
  router.post("/users/me", AuthController.register);
  router.post("/users/logout", AuthController.register);
  router.post("/users/logout-all", AuthController.register);
  // MEALS
  router.post("/meals", createMeal);
  router.get("/meals", AuthMiddleWare.auth_v1, getMeals);
  router.get("/meals/:idMeal", getMealById);
  router.put("/meals/:idMeal", updateMealById);
  router.delete("/meals", deleteMealsByListId);
  router.delete("/meals/:idMeal", deleteMealById);
  // ORDERS
  router.post("/orders", createOrder);
  return app.use("/", router);
};

module.exports = initAPIs;
