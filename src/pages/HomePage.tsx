// import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {fetchTrendMovies} from "../../api.js";
import MovieList from "../components/MovieList/MovieList.jsx";

const HomePage = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendMovies().then((response) => {
      setMovies(response);
    })
  }, []);

  return (
    <div>
      <span className="text-5xl font-extrabold uppercase p-6 ">trending today</span>
      <MovieList movies={movies}/>
    </div>
  )
}
export default HomePage;