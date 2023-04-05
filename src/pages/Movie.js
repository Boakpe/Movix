import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import VideoJS from "../components/VideoJS";
import videojs from "video.js";
import { useEffect, useState, useRef } from "react";
import {
  IoReturnUpBackOutline,
  IoPlayCircleOutline
} from "react-icons/io5";

import Loading from "../components/Loading";
const Movie = () => {
  const location = useLocation();
  const { from } = location.state;
  const url = `https://api.consumet.org/meta/tmdb/info/${from}?type=movie`;
  const { data: movie, loading } = useFetch(url);
  const [isMovieLoaded, setIsMovieLoaded] = useState(false);
  const [movieUrl, setMovieUrl] = useState("");
  const [subMovieUrl, setSubMovieUrl] = useState("");

  useEffect(() => {
    if (movie && !isMovieLoaded) {
      setIsMovieLoaded(true);
      const showId = movie.id;
      const episodeId = movie.episodeId;
      const watch_url = `https://api.consumet.org/meta/tmdb/watch/${episodeId}?id=${showId}`;

      fetch(watch_url)
        .then((response) => response.json())
        .then((data) => {
          const url = data.sources[0].url;
          const sub_url = data.subtitles[0].url;
          setMovieUrl(url);
          setSubMovieUrl(sub_url);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }, [movie, isMovieLoaded]);

  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [
      {
        src: movieUrl,
        type: "application/x-mpegURL",
      },
    ],
    tracks: [
      {
        src: subMovieUrl,
        kind: "subtitles",
        label: "English",
        default: true,
      },
    ],
  };

  console.log(subMovieUrl);

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };

  const [ready, setReady] = useState(false);

  const handleClick = () => {
    setReady(!ready);
  };

  return (
    <div className="container py-4 min-vh-71">
      {loading && <Loading />}
      {movie && !ready && (
        <>
          <div className="row rounded bg-sec">
            <div className="col-md-6 px-0">
              <img
                src={movie.image}
                alt="{{ game.title }}"
                className="w-100 rounded"
              />
            </div>
            <div className="col-md-6  px-4">
              <h1 className="mb-3 text-white mt-4">
                {" "}
                <strong>{movie.title}</strong>
              </h1>
              <p className="mb-4 text-secondary">{movie.description}</p>;
              <button
                className="btn btn-outline-primary mb-4 d-flex align-items-center justify-content-center"
                onClick={handleClick}
              >
                <IoPlayCircleOutline /> <span className="mx-1">Watch</span>
              </button>
            </div>
          </div>
        </>
      )}
      {ready && (
        <div className="mt-4">
          <div className="btn btn-outline-primary mb-2" onClick={handleClick}>
            <IoReturnUpBackOutline /> Return
          </div>

          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
      )}
    </div>
  );
};

export default Movie;
