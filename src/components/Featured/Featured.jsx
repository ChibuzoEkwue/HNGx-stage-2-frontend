import "./Featured.scss";

import { useEffect, useState } from "react";

import axios from "axios";

const Featured = () => {
	const [featuredMovie, setFeaturedMovie] = useState({});

	useEffect(() => {
		const getFeaturedMovie = async () => {
			const apiKey = import.meta.env.VITE_API_KEY;
			const {
				data: { results },
			} = await axios.get(
				`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=${apiKey}`
			);
			setFeaturedMovie(results[Math.floor(Math.random() * 20)]);
			console.log(featuredMovie);
		};

		getFeaturedMovie();
	}, []);

	return (
		<section className="featured">
			<img
				src={`https://image.tmdb.org/t/p/original${featuredMovie?.backdrop_path}`}
				alt=""
			/>
			<div className="overlay">
				<div className="container">
					<div className="movieDetails">
						<h1>{featuredMovie?.title}</h1>
						<div className="rating">
							<div className="rate">
								<img src="/imdb.svg" />
								<span>89.0 / 100</span>
							</div>
							<div className="rate">
								<img src="/tomato.svg" />
								<span>97%</span>
							</div>
						</div>
						<div className="desc">{featuredMovie?.overview}</div>
						<button>
							<img src="/Play.svg" /> <span>Watch trailer</span>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Featured;
