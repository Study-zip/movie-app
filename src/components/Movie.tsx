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
      <div>
        <img src={coverImg} alt={title} />
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <p>{summary}</p>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}{" "}
        </ul>
      </div>
    </>
  );
};

export default Movie;
