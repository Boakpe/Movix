import CardList from "../components/CardList";
import Loading from "../components/Loading";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";

const Home = () => {
  const url = "http://localhost:3000/movies";
  const { data: movies, loading } = useFetch(url);
  console.log(movies);

  const [moviesInfo, setMoviesInfo] = useState(null);
  const [loading2, setLoading2] = useState(false)

  useEffect(() => {
    const fetchMoviesInfo = async () => {
      if (movies) {
        const updatedMovies = [];
        setLoading2(true)
        for (let i = 0; i < movies.length; i++) {
          const urlExtApi = `https://api.consumet.org/meta/tmdb/${movies[i].title}`;
          const response = await fetch(urlExtApi);
          const data = await response.json();
          const movieInfo = data.results[0];

          const updatedMovie = movieInfo;

          updatedMovies.push(updatedMovie);
        }

        setLoading2(false)
        setMoviesInfo(updatedMovies);
      }
    };
    fetchMoviesInfo();
  }, [movies]);


  return (
    <div className="container mt-2 min-vh-71">
      {(loading || loading2)  && <Loading/> }
      <CardList movies={movies} moviesInfo={moviesInfo}/>
    </div>
  );
};

export default Home;
