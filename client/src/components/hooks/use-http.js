// import { useCallback, useState } from "react";
// import { MOVIES_FIREBASE_URL } from "../Constants/URL.constants";

// function useHttpRequest(typeRequest, data = null) {
//   const [results, setResults] = useState(null);
//   const [errorMessage, setErrorMessage] = useState("");

//   switch (typeRequest) {
//     case typeHTTPRequest.GET:
//       setResults(fetchMoviesHandler());
//       return {
//         results: results,
//         errors: errorMessage,
//       };
//     case typeHTTPRequest.POST:
//       setResults(addMovieHandler(data));
//       return {
//         results: results,
//         errors: errorMessage,
//       };
//     case typeHTTPRequest.PUT:
//       setResults(putMovieHandler(data));
//       return {
//         results: results,
//         errors: errorMessage,
//       };
//     case typeHTTPRequest.DELETE:
//       setResults(deleteMovieHandler(data));
//       return {
//         results: results,
//         errors: errorMessage,
//       };
//     case typeHTTPRequest.SEARCH:
//       searchMovieHandler(data);
//       return {
//         results: results,
//         errors: errorMessage,
//       };
//     case typeHTTPRequest.GET_BY_ID:
//       setResults(fetchMovieByIdHandler(data));
//       return {
//         results: results,
//         errors: errorMessage,
//       };
//     default:
//       break;
//   }
// }
// const addMovieHandler = async (movieToAdd) => {
//   try {
//     console.log("MOVIE TO ADDD", movieToAdd);
//     const initRequest = {
//       method: "POST",
//       body: JSON.stringify(movieToAdd),
//       headers: {
//         "Content-type": "application/json",
//       },
//     };

//     const response = await fetch(MOVIES_FIREBASE_URL, initRequest);
//     const data = await response.json();
//     console.log("DATA AFTER ADDED", data);
//     return data;
//   } catch (error) {
//     return error.message;
//   }
// };
// const fetchMoviesHandler = async () => {
//   try {
//     const response = await fetch(MOVIES_FIREBASE_URL);
//     const data = await response.json();
//     if (!response.ok) {
//       throw new Error("Error " + response.status);
//     }

//     console.log("DATA WANNA FETCH", data);
//     const tempList = [];

//     for (const item in data) {
//       tempList.push({
//         id: item,
//         title: data[item].title,
//         opening: data[item].opening,
//         release: data[item].release,
//       });
//     }

//     return tempList;
//   } catch (error) {
//     return error.message;
//   }
// };
// const putMovieHandler = async (movieToPut) => {
//   try {
//     console.log("MOVIE TO PUT", movieToPut);
//     const initRequest = {
//       method: "PUT",
//       body: JSON.stringify(movieToPut),
//       headers: {
//         "Content-type": "application/json",
//       },
//     };

//     const response = await fetch(MOVIES_FIREBASE_URL, initRequest);
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     return error.message;
//   }
// };
// const deleteMovieHandler = async (idMovie) => {
//   try {
//     console.log("ID MOVIE TO PUT", idMovie);
//     const initRequest = {
//       method: "DELETE",
//       body: JSON.stringify(idMovie),
//       headers: {
//         "Content-type": "application/json",
//       },
//     };

//     const response = await fetch(MOVIES_FIREBASE_URL, initRequest);
//     const data = await response.json();
//     console.log("DATA AFTER DELETE", data);
//     return data;
//   } catch (error) {
//     return error.message;
//   }
// };
// const searchMovieHandler = async (movieToSearch) => {
//   try {
//     console.log("TERM TO SEARCH", movieToSearch);
//     const initRequest = {
//       method: "GET",
//       body: JSON.stringify(movieToSearch),
//       headers: {
//         "Content-type": "application/json",
//       },
//     };

//     const response = await fetch(MOVIES_FIREBASE_URL, initRequest);
//     const data = await response.json();
//     console.log("DATA AFTER SEARCHED", data);
//   } catch (error) {
//     return error.message;
//   }
// };
// const fetchMovieByIdHandler = async (idMovie) => {
//   try {
//     console.log("ID MOVIE TO GET", idMovie);
//     const initRequest = {
//       method: "GET",
//       body: JSON.stringify(idMovie),
//       headers: {
//         "Content-type": "application/json",
//       },
//     };
//     const response = await fetch(MOVIES_FIREBASE_URL, initRequest);
//     const data = await response.json();
//     console.log("DATA AFTER GET BY ID", data);
//     return data;
//   } catch (error) {
//     return error.message;
//   }
// };
// const typeHTTPRequest = {
//   GET: "GET",
//   POST: "POST",
//   PUT: "PUT",
//   DELETE: "DELETE",
//   SEARCH: "SEARCH",
//   GET_BY_ID: "GET_BY_ID",
// };

// export default useHttpRequest;

import { useState, useCallback } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
