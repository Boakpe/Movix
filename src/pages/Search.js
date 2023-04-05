import { useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import CardList from "../components/CardList";
import Loading from "../components/Loading";

const Search = () => {
  const [searchParams] = useSearchParams();
  const url = "http://localhost:3000/movies?" + searchParams;
  const { data: movies, loading } = useFetch(url);

  const [moviesInfo, setMoviesInfo] = useState(null);

  useEffect(() => {
    const fetchMoviesInfo = async () => {
      if (movies) {
        const updatedMovies = [];

        for (let i = 0; i < movies.length; i++) {
          const urlExtApi = `https://api.consumet.org/meta/tmdb/${movies[i].title}`;
          const response = await fetch(urlExtApi);
          const data = await response.json();
          const movieInfo = data.results[0];

          const updatedMovie = movieInfo;

          updatedMovies.push(updatedMovie);
        }

        setMoviesInfo(updatedMovies);
      }
    };
    fetchMoviesInfo();
  }, [movies]);

  console.log(movies);

  return (
    <div className="container mt-2 min-vh-71 d-flex align-items-center justify-content-center">
      {loading && <Loading />}
      {!loading && movies && movies.length !== 0 ? (
        <CardList movies={movies} moviesInfo={moviesInfo} />
      ) : (
        <div className="text-center">
          <h1 className="text-white mb-3">Nenhum resultado encontrado</h1>
          <p className="text-secondary">
            Desculpe, não encontramos nenhum filme correspondente à sua
            pesquisa. Por favor, tente novamente com outros termos de pesquisa.
          </p>
        </div>
      )}
    </div>
  );
};

export default Search;
