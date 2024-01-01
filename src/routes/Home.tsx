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
        <div>
          <Link to={`/`} className="logo">
            Movie.zip
          </Link>
        </div>
        <nav className="nav">
          <div className="nav__item">
            <Link to={`/`}>HOME</Link>
          </div>
          <div className="nav__item">
            <Link to={`/about`}>ABOUT</Link>
          </div>
        </nav>
      </header>
      {loading ? (
        <p className="movie__wrap">Loading...</p>
      ) : (
        <div className="movie__wrap">
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
