import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ViewDetail({
  id,
  coverImg,
  title,
  summary,
  genres,
  year,
  runtime,
  rating,
  like_count,
  download_count,
}) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to="">{title}</Link>
      </h2>
      <p>{summary.length > 240 ? `${summary.slice(0, 240)}...` : summary}</p>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
}

export default ViewDetail;
