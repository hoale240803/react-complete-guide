import React, { useRef } from "react";
import classes from "./AddMovie.module.css";
function AddMovie(props) {
  //   const { titleRef, openingTextRef, releaseDateRef } = useRef("");
  const titleRef = useRef("");
  const openingTextRef = useRef("");
  const releaseDateRef = useRef("");
  const submitHandler = (e) => {
    e.preventDefault();
    // validation here

    const movieModel = {
      title: titleRef.current.value,
      opening: openingTextRef.current.value,
      release: releaseDateRef.current.value,
    };
    props.onAddMovie(movieModel);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="opening-text">Opening Text</label>
        <textarea rows="5" id="opening-text" ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor="date">Release Date</label>
        <input type="text" id="date" ref={releaseDateRef} />
      </div>
      <button>Add Movie</button>
    </form>
  );
}

export default AddMovie;
