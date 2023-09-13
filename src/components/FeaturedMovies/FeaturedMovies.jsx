import { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./FeaturedMovies.scss";
import axios from "axios";
const FeaturedMovies = () => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		const getMovies = async () => {
			const apiKey = import.meta.env.VITE_API_KEY;
			const {
				data: { results },
			} = await axios.get(
				`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${apiKey}`
			);
			setMovies(results.slice(0, 10));
		};
		getMovies();
	}, []);
	return (
		<section className="fMovie">
			<div className="container">
				<div className="text">
					<h3>Featured Movie</h3>
					<span>See more &gt;</span>
				</div>
				<div className="movieList">
					{movies.map((movie) => (
						<Card
							path={movie.id}
							poster_path={movie.poster_path}
							title={movie.title}
							key={movie.id}
							release_date={movie.release_date}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default FeaturedMovies;
