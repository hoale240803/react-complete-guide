const Meal = require("../models/meals");
const mongoose = require("mongoose");

function createMeal(req, res) {
  const meal = new Meal({
    _id: mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
    description: req.body.description,
    amount: req.body.amount,
  });

  return meal
    .save()
    .then((newMeal) => {
      console.log("A MEAL CREATED");
      return res.status(201).json({
        success: true,
        message: "New Meal created successfully",
        Meal: newMeal,
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

function createMealsByFileUpload(req, res) {}

function getMeals(req, res) {
  return Meal.find()
    .select("_id name price description amount")
    .then((listMeals) => {
      console.log("LIST MEALS GOTCHA!!!", listMeals);
      return res.status(200).json({
        success: true,
        message: "GET MEAL LIST SUCCESSFULLY",
        meals: listMeals,
      });
    })
    .catch((err) => {
      console.log("Server error. Please Try Again!!!");
      return res.status(500).json({
        success: false,
        message: "Server error. Please try again!",
        error: err.message,
      });
    });
}
function getMealById(req, res) {
  const idMeal = req.params.idMeal;
  return Meal.findById(idMeal)
    .then((mealRes) => {
      console.log("GET A MEAL BY ID SUCCESSFULLY", mealRes);
      return res.status(200).json({
        success: true,
        message: "GET A MEAL BY ID SUCCESSFULLY",
        meal: mealRes,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        message: "Server error. Please try again!",
        error: err.message,
      });
    });
}
function updateMealById(req, res) {
  const idMeal = req.params.idMeal;
  const updatedMeal = req.body;

  return Meal.updateOne({ _id: idMeal }, { $set: updatedMeal })
    .exec()
    .then(() => {
      console.log("UPDATED A MEAL SUCCESSFULLY");
      return res.status(200).json({
        success: true,
        message: "UPDATED A MEAL SUCCESSFULLY",
      });
    })
    .catch((err) => {
      console.log("SERVER ERROR. PLEASE TRY AGAIN!!!");
      return res.status(500).json({
        success: false,
        message: "SERVER ERROR. PLEASE TRY AGAIN !!!",
        error: err.message,
      });
    });
}

function deleteMealById(req, res) {
  const idMeal = req.params.idMeal;
  return Meal.findByIdAndRemove(idMeal)
    .exec()
    .then((deletedMeal) => {
      console.log("DELETE A MEAL SUCCESSFULLY");
      return res.status(201).json({
        success: true,
        message: "DELETE A MEAL SUCCESSFULLY",
        deletedMeal: deletedMeal,
      });
    })
    .catch((err) => {
      console.log("SERVER ERROR. PLEASE TRY AGAIN!!!");
      return res.status(500).json({
        success: false,
        message: "SERVER ERROR. PLEASE TRY AGAIN !!!",
        error: err.message,
      });
    });
}
function deleteMealsByListId(req, res) {
  const listId = req.body.listId;
  return Meal.deleteMany({ _id: { $in: listId } }).then(() => {
    console.log("DELETED LIST OF MEAL SUCCESSFULLY");
    return res
      .status(200)
      .json({
        success: true,
        message: "DELETED LIST OF MEAL SUCCESSFULLY",
      })
      .catch((err) => {
        console.log("SERVER ERROR. PLEASE TRY AGAIN!!!");
        return res.status(500).json({
          success: false,
          message: "SERVER ERROR. PLEASE TRY AGAIN!!!",
          error: err.message,
        });
      });
  });
}

module.exports = {
  createMeal,
  getMeals,
  updateMealById,
  getMealById,
  getMeals,
  deleteMealsByListId,
  deleteMealById,
};
