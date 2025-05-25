import SearchBar from "../components/SearchBar/SearchBar.jsx";
import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMovieByTitle} from "../../api.js";
import MovieList from "../components/MovieList/MovieList.jsx";


const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("query") ?? '';

  const handleChangeQuery = (newQuery: string) => {
    if (!newQuery) {
      return setSearchParams({});
    }
    searchParams.set('query', newQuery);
    setSearchParams(searchParams);
  }

  useEffect(() => {
    getMovieByTitle(query).then((data) => {
      setMovies(data)
    });
  }, [query]);

  return (
    <div className="px-6">

      <SearchBar handleChangeQuery={handleChangeQuery} query={query}/>
      <MovieList movies={movies}/>
    </div>
  )
}

export default MoviesPage;