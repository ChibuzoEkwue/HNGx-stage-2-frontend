import axios from "axios";

import "./search.scss";

import { useEffect, useState } from "react";

import Card from "../components/Card/Card";

import { useLocation } from "react-router-dom";

import { Helmet } from "react-helmet-async";

const Search = () => {
	const [loading, setLoading] = useState(true);

	const [noResult, setNoResult] = useState(false);

	const [movies, setMovies] = useState([]);

	const { search } = useLocation();

	const query = search.split("=")[1];

	useEffect(() => {
		const apiKey = import.meta.env.VITE_API_KEY;

		const searchMovies = async () => {
			setLoading(true);
			setMovies([]);

			try {
				const {
					data: { results },
				} = await axios.get(
					`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1&api_key=${apiKey}&limit=10`
				);
				if (results.length < 1) {
					setNoResult(true);
					return;
				}
				console.log(results);
				setLoading(false);

				setMovies(results);
			} catch (error) {
				console.log(error);
			}
		};
		searchMovies();
	}, [query]);

	return (
		<section>
			<Helmet>
				<title>Search Movie - Movie Box</title>
			</Helmet>
			<div className="container">
				{loading && <h2 className="loading">Loading....</h2>}
				<div className="searchResults">
					{movies.length > 1 &&
						movies.map((movie) => (
							<Card
								poster_path={movie.poster_path}
								title={movie.title}
								key={movie.id}
								path={movie.id}
								release_date={movie.release_date}
							/>
						))}

					{noResult && <h2 className="noresult">No Movie found</h2>}
				</div>
			</div>
		</section>
	);
};

export default Search;
