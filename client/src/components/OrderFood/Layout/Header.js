import { Fragment } from "react";

import mealsImage from "../../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "../Layout/HeaderCartButton";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>HoaMeal </h1>
        <ul className={classes.header__navbar}>
          <Link to="/movies">Movies</Link>
          <Link to="/tasks">Tasks</Link>
          <Link to="/expenses">Expenses</Link>
        </ul>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main__image"]}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
