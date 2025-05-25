import axios from 'axios';

const urlSearch = 'https://api.themoviedb.org/3/search/movie';
const urlDetails = `https://api.themoviedb.org/3/movie/`;
const urlCast = `https://api.themoviedb.org/3/movie/`;
const urlTrend = 'https://api.themoviedb.org/3/trending/movie/day?include_adult=false&language=en-US&page=1';

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMzAyZTFhYTY3ZDRkMTljYjJmNDg1YTYzMTdiNTk5ZSIsIm5iZiI6MTczNzEzMjk0Mi43NzksInN1YiI6IjY3OGE4YjhlMTAyYzE3OTRlZjFkMzg5ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6jLoq_puWp6YOqzwSKSrNgW7-MgDa2cp4XEJAp-5asU'
	}
};

export const fetchTrendMovies = async (url = urlTrend) => {
	const response = await axios.get(`${url}`, options);
	return response.data.results;
};

export const getMovieById = async (movieId) => {
	const response = await axios.get(`${urlDetails}/${movieId}`, options);
	return response.data;
};

export const getMovieCastById = async (movieId) => {
	const response = await axios.get(`${urlCast}/${movieId}/credits`, options);
	return response.data.cast;
};

export const getMovieReviewsById = async (movieId) => {
	const response = await axios.get(`${urlCast}/${movieId}/reviews`, options);
	return response.data.results;
};

export const getMovieByTitle = async (title) => {
	const response = await axios.get(`${urlSearch}?query=${title}`, options);
	return response.data.results;
};

