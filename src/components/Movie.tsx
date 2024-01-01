import { Link } from "react-router-dom";
type MovieType = {
  key: string;
  id: string;
  title: string;
  summary: string;
  genres: string[];
  coverImg?: string;
};

const Movie = ({ id, coverImg, title, summary, genres }: MovieType) => {
  return (
    <>
      <div className="movie">
        <img className="movie__img" src={coverImg} alt={title} />
        <h2 className="movie__title">
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p className="movie__detail">{summary}</p>
        <ul className="movie__tag-wrap">
          {genres.map((g) => (
            <li className="movie__tag" key={g}>
              {g}
            </li>
          ))}{" "}
        </ul>
      </div>
    </>
  );
};

export default Movie;
