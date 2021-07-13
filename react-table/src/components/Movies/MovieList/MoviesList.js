import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Movie from "../Movie/Movie";
import classes from "./MoviesList.module.css";
import MovieDetails from "../MovieDetails/MovieDetails";

const MovieList = (props) => {
  return (
    <Fragment>
      <ul className={classes["movies-list"]}>
        {props.movieList.map((movie) => {
          return (
            <Link to={`/movies/${movie.id}`}>
              <Movie key={movie.id} movieItem={movie} />
            </Link>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default MovieList;
