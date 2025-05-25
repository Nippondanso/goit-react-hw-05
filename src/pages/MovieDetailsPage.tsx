import {Link, Outlet, useLocation, useParams} from "react-router-dom";
import {getMovieById} from "../../api.js";
import {Suspense, useEffect, useRef, useState} from "react";
import {IoIosArrowBack} from "react-icons/io";


type Movie = {
  id: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  overview: string;
  genres: Object[];
}

const MovieDetails = () => {
  const {id} = useParams();
  // const [movie, setMovies] = useState<Partial<Movie>>({});
  const [movie, setMovies] = useState<Partial<Movie>>({});
  const [genres, setGenres] = useState('');
  const location = useLocation();
  const backLink = useRef(location.state);

  const getGenres = (movie: Movie) => {
    try {
      let g = movie.genres.map((genre: { name: string; }) => genre.name);
      setGenres(g.join(' '));
    } catch (error) {
      return error;
    }
  }


  useEffect(() => {
    getMovieById(id).then((movie) => {
      setMovies(movie);
    })
  }, [id]);

  useEffect(() => {
    getGenres(movie as Movie);
  }, [movie]);

  return (<>


    <div className="px-6">
      {/*<span className="text-5xl font-extrabold"> Movie Details</span>*/}
      <div className="pb-4">
        <button
          className="bg-transparent uppercase hover:animate-pulse  text-white font-bold py-2 pr-4  rounded inline-flex items-center">
          <IoIosArrowBack className=""/>
          <Link to={backLink.current} className="  ml-1"> Go Back </Link>
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6 max-w-300">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Movie Poster"/>


        <div className="col-span-2 flex flex-col gap-2">

          <p>
            {movie.title}({new Date(movie.release_date).getFullYear()})
          </p>

          <p>
            User Score: {`${(movie.vote_average * 10).toFixed(0)}%`}
          </p>

          <b>
            Overview
          </b>

          <p>
            {movie['overview']}
          </p>

          <b>
            Genres
          </b>

          <p>
            {genres}
          </p>
        </div>
      </div>

      <hr className="my-6"/>

      <ul className="list-disc uppercase font-bold marker:text-sky-400">
        <li className="hover:animate-pulse">
          <Link to="cast">Cast</Link>
        </li >
        <li className="hover:animate-pulse">
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>

      <hr className="my-6"/>


      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet context={movie}/>
      </Suspense>


    </div>
  </>)
}

export default MovieDetails;