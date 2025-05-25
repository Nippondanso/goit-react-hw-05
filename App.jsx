import {lazy, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import NotFoundPage from './src/pages/NotFoundPage.jsx';
import {Navigation} from "./src/components/Navigation/Navigation.jsx";

const HomePage = lazy(() => import('./src/pages/HomePage.tsx'));
const MoviesPage = lazy(() => import('./src/pages/MoviesPage.tsx'));
const MovieDetailsPage = lazy(() => import('./src/pages/MovieDetailsPage.tsx'));
const MovieCast = lazy(() => import('./src/components/MovieCast/MovieCast.tsx'));
const MovieReviews = lazy(() => import('./src/components/MovieReviews/MovieReviews.tsx'));


function App() {
	
	return (
		<>
			<Navigation/>
			<Suspense fallback={<div>Loading page...</div>}>
				<Routes>
					<Route path="/" element={<HomePage/>}/>
					<Route path="/movies" element={<MoviesPage/>}/>
					<Route path="/movies/:id" element={<MovieDetailsPage/>}>
						<Route path="cast" element={<MovieCast/>}/>
						<Route path="reviews" element={<MovieReviews/>}/>
					</Route>
					<Route path="*" element={<NotFoundPage/>}/>
				</Routes>
			</Suspense>
		</>
	)
}

export default App
