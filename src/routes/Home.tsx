import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import "./Home.css";

type MovieType = {
  id: string;
  title: string;
  summary: string;
  genres: string[];
  medium_cover_image: string;
};

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <header className="header">
        <h1>Movie App</h1>
        <ul className="nav">
          <li>
            <Link to={`/`}>HOME</Link>
          </li>
          <li>
            <Link to={`/about`}>ABOUT</Link>
          </li>
        </ul>
      </header>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {movies.map((movie: MovieType) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}{" "}
    </>
  );
};

export default Home;
