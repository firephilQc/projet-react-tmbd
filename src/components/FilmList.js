import React, { useState, useEffect } from "react";

const API_KEY = "6ac1e3f9caf32f53c1769ed656dbedd8";
const DEADPOOL_MOVIE_ID = 493529;
const POSTER_BASE_URL = "https://image.tmdb.org/t/p/w300";

function FilmList() {
  const [moviePosters, setMoviePosters] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${DEADPOOL_MOVIE_ID}/similar?api_key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        setMoviePosters(data.results);
      });
  }, []);

  return (
    <div>
      <h1>Films que j'aime</h1>
      <div className="poster-grid">
        {moviePosters.slice(0,7).map((poster) => (
          <img
            key={poster.id}
            src={`${POSTER_BASE_URL}${poster.poster_path}`}
            alt={poster.title}
          />
        ))}
      </div>
    </div>
  );
}

export default FilmList;

