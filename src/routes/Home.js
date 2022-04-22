import { useEffect, useState } from "react";
import DisplayMovie from "../components/DisplayMovie";
import { Loading, LoadMovieList } from "../components/Loading";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const condition = "list_movies.json?limit=30&minimum_rating=8.5&sort_by=year";

  LoadMovieList(setMovies, setLoading, condition);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        movies.map((movie) => (
          <DisplayMovie
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
          />
        ))
      )}
    </div>
  );
}

export default Home;
