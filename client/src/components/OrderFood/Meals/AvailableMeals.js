import Card from "../../UI/Card/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useCallback, useEffect, useState } from "react";

// const DUMMY_MEALS = [
//   {
//     id: "m1",
//     name: "Sushi",
//     description: "Finest fish and veggies",
//     price: 10,
//   },
//   {
//     id: "m2",
//     name: "Schnitzel",
//     description: "A german specialty!",
//     price: 30,
//   },
//   {
//     id: "m3",
//     name: "Barbecue Burger",
//     description: "American, raw, meaty",
//     price: 12,
//   },
//   {
//     id: "m4",
//     name: "Green Bowl",
//     description: "Healthy...and green...",
//     price: 20,
//   },
// ];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  const fetchMeals = useCallback(async () => {
    const response = await fetch(
      "https://react-complete-guide-a925f-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
    );
    if (!response.ok) throw new Error("http request, something was wrong!");
    const data = await response.json();

    // const tempMeals = [];
    // for (const meal in data) {
    // }
    setMeals(data);
    // console.log(tempMeals);
  }, []);

  useEffect(() => {
    fetchMeals();
    return () => {
      setMeals([]);
    };
  }, [fetchMeals]);
  const mealsList = meals.map((meal) => <MealItem key={meal.id} meal={meal} />);
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
