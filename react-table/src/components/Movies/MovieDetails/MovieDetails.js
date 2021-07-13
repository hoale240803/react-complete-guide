import React from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const params = useParams();
  console.log("PARAMS URL", params);
  return <div>{params}</div>;
}

export default MovieDetails;
