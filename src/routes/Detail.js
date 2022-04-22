import { useState } from "react";
import { useParams } from "react-router-dom";
import { Loading, LoadMovie } from "../components/Loading";
import ViewDetail from "../components/ViewDetail";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const condition = `movie_details.json?movie_id=${id}`;

  LoadMovie(setMovie, setLoading, condition);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <ViewDetail
          id={movie.id}
          coverImg={movie.medium_cover_image}
          title={movie.title}
          summary={movie.description_full}
          genres={movie.genres}
          year={movie.year}
          runtime={movie.runtime}
          rating={movie.rating}
          likeCount={movie.like_count}
          downloadCount={movie.download_count}
        />
      )}
    </div>
  );
}

export default Detail;
