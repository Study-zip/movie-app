import { Link } from "react-router-dom";
type MovieType = {
  key: string;
  title: string;
  summary: string;
  genres: string[];
  coverImg?: string;
};

const Movie = ({ coverImg, title, summary, genres }: MovieType) => {
  return (
    <>
      <div>
        <img src={coverImg} alt={title} />
        <h2>
          <Link to="/movie">{title}</Link>
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
