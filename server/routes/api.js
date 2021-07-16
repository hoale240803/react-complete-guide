const express = require("express");
const router = express.Router();
const AuthMiddleWare = require("../middleware/AuthMiddleware");
const AuthController = require("../controllers/AuthController");
const createOrder = require("../controllers/Orders");
const MealsController = require("../controllers/meals");

const FilesController = require("../controllers/FileController");

/**
 * Init all APIs on your application
 * @param {*} app from express
 */

const baseURL = process.env.REACT_APP_BASE_URL;

let initAPIs = (app) => {
  // AUTHENTICATION
  // router.use(AuthMiddleWare.auth_v1);
  router.post("/users/register", AuthController.register);
  router.post("/users/login_v1", AuthController.login_v1);
  router.post("/users/me", AuthController.register);
  router.post("/users/logout", AuthController.register);
  router.post("/users/logout-all", AuthController.register);
  router.post("/users/verifyEmail", AuthController.verifyEmail);
  // MEALS
  router.post("/meals", MealsController.createMeal);
  router.get("/meals", AuthMiddleWare.auth_v1, MealsController.getMeals);
  router.get("/meals/:idMeal", MealsController.getMealById);
  router.put("/meals/:idMeal", MealsController.updateMealById);
  router.delete("/meals", MealsController.deleteMealsByListId);
  router.delete("/meals/:idMeal", MealsController.deleteMealById);
  // ORDERS
  router.post("/orders", createOrder);
  // FILES
  router.get("/files", FilesController.getFiles);
  router.get("/files/images", FilesController.getImages);
  router.post("/files/file", FilesController.handleUploadFile);
  router.post("/files/image", FilesController.handleUploadImage);
  router.get("/files/:name", FilesController.downloadFile);
  router.get("/files/images/:name", FilesController.downloadImage);
  return app.use("/", router);
};

module.exports = initAPIs;
