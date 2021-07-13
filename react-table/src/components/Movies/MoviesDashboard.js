import React, { useCallback, useEffect, useState } from "react";
import { MOVIE_URL, MOVIES_FIREBASE_URL } from "../Constants/URL.constants";
import AddMovie from "./AddMovie/AddMovie";
import MoviesList from "./MovieList/MoviesList";
import classes from "./MoviesDashboard.module.css";
import useHttpRequest from "./../hooks/use-http";
function MoviesDashboard() {
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch(MOVIES_FIREBASE_URL);
      const data = await response.json();
      if (!response.ok) {
        throw new Error("Error " + response.status);
      }

      console.log("DATA WANNA FETCH", data);
      const tempList = [];

      for (const item in data) {
        tempList.push({
          id: item,
          title: data[item].title,
          opening: data[item].opening,
          release: data[item].release,
        });
      }
      setMovieList(tempList);
    } catch (error) {
      console.log("ERROR>>>>>>>>", error);
      setError(error.message);
    }
    console.log("DATA GOTCHA", movieList);
    setIsLoading(false);
  }, []);

  // const dataReturn = useHttpRequest("GET");
  // const fetchMoviesHandler = () => {
  //   setMovieList(dataReturn);
  //   console.log("DATA RETURN AFTER CALLING HOOK", dataReturn);
  // };

  useEffect(() => {
    return () => {
      setMovieList([]);
    };
  }, [fetchMoviesHandler]);

  let content = <div>No Movies Found</div>;

  if (isLoading) {
    content = <div>Loading........</div>;
  }
  if (error) {
    content = <div>{error}</div>;
  }
  if (movieList.length > 0) {
    content = <MoviesList movieList={movieList} />;
  }

  const addMovieHandler = async (movieToAdd) => {
    try {
      console.log("MOVIE TO ADDD", movieToAdd);
      const initRequest = {
        method: "POST",
        body: JSON.stringify(movieToAdd),
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await fetch(MOVIES_FIREBASE_URL, initRequest);
      const data = await response.json();
      console.log("DATA AFTER ADDED", data);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default MoviesDashboard;
