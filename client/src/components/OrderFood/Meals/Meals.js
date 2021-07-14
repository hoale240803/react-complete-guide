import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

const Meals = () => {
  const watermelon = "🍍";
  return (
    <Fragment>
      <MealsSummary />
      <h1 style={{ textAlign: "center" }}>🍌🚀 Welcome To HoaMeal 🚀🍌</h1>
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
