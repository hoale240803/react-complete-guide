import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const { id, description, name } = props.meal;
  const price = `$${Number.parseFloat(props.meal.price).toFixed(2)}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={id} meal={props.meal} />
      </div>
    </li>
  );
};

export default MealItem;
