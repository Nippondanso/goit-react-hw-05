import {Link, useLocation} from "react-router-dom";

const MovieList = ({movies}) => {
	const location = useLocation();
	
	
	return (<div className="p-6">
		{movies.map(movie => (<li key={movie.id} role="list"
		                          className="list-disc uppercase font-bold marker:text-sky-400 hover:animate-pulse">
			{/*<a href={`/movies/${movie.id}`}>{movie.title}</a>*/}
			<Link to={`/movies/${movie.id}`} state={location}>{movie.title}</Link>
		</li>))}
	</div>)
}

export default MovieList;