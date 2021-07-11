import React, { Fragment } from "react";
import Movie from "../Movie/Movie";
import classes from "./MoviesList.module.css";

const MovieList = (props) => {
  return (
    <Fragment>
      <ul className={classes["movies-list"]}>
        {props.movieList.map((movie) => {
          return <Movie key={movie.id} movieItem={movie} />;
        })}
      </ul>
    </Fragment>
  );
};

export default MovieList;
