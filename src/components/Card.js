import { Link } from "react-router-dom";
import usePost from "../hooks/usePost";
import useFetch from "../hooks/useFetch";
//import { useState } from "react";

const Card = ({ id, title, description, image, api_id }) => {
  const url = "http://localhost:3000/movies";
  const { isLoading, error, doPost } = usePost(url);
  const { data: movies } = useFetch(url);

  const handleAddMovie = () => {
    const newMovie = { title };
    doPost(newMovie);
  };

  const was_added = () => {
    return movies?.some((movie) => movie.title === title);
  }
  

  return (
    <div className="col-md-3 mb-3 d-flex align-items-stretch">
      <div className="card game-card ">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-truncate text-white">
            <strong>{title}</strong>
          </h5>

          <p className="card-text text-secondary text-truncate">
            {description}
          </p>
          <Link
            to={"/movies/" + id}
            state={{ from: api_id }}
            className="btn btn-outline-primary mt-auto align-self-start"
          >
            More info
          </Link>
          { !was_added() && movies  &&
            <button
            onClick={handleAddMovie}
            className="btn btn-outline-success mt-2 align-self-start"
          >
            {isLoading ? "Loading..." : "Add Movie"}
          </button>
          }
          
          {error && <p className="text-danger mt-2">{error.message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Card;
