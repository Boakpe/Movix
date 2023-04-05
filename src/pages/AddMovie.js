import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Card from "../components/Card";

const AddMovie = () => {
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState("");
  const { data: movies, loading } = useFetch(url);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUrl(`https://api.consumet.org/meta/tmdb/${query}?page=1`);
  };

  return (
    <div className="container mt-2 min-vh-71 d-flex justify-content-center align-items-center flex-column">
      <form className="d-flex" onSubmit={handleSubmit}>
        <input
          type="text"
          name="add-movie"
          placeholder="Search a movie to add"
          onChange={(e) => setQuery(e.target.value)}
          className="form-control form-dark"
        />
        <button className="btn btn-outline-primary" type="submit">
          Procurar
        </button>
      </form>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="row">
          {movies &&
            movies.results.map((movie) => {
              return (
                movie.rating !== 0 &&
                movie.image !== "https://image.tmdb.org/t/p/originalnull" &&
                movie.image !==
                  "https://image.tmdb.org/t/p/originalundefined" &&
                movie.type === "Movie" && (
                  <Card
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    description={movie.description}
                    image={movie.image}
                    api_id={movie.id}
                  />
                )
              );
            })}
        </div>
      )}
    </div>
  );
};

export default AddMovie;
