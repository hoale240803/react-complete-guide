import React from "react";

import classes from "./Movie.module.css";

const Movie = (props) => {
  return (
    <li className={classes.movie} key={props.key}>
      <h2>{props.movieItem.title}</h2>
      <h3>{props.movieItem.releaseDate}</h3>
      <p>{props.movieItem.openingText}</p>
    </li>
  );
};

export default Movie;
