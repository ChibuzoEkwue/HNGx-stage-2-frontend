import "./movieDetails.scss";
import axios from "axios";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { json, useLoaderData } from "react-router-dom";

const MovieDetails = () => {
	const [add, setAdd] = useState(false);
	const data = useLoaderData();

	return (
		<>
			<Helmet>
				<title>{data.title}</title>
			</Helmet>
			<section className="movieDetailsPage">
				<img
					src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
					alt=""
				/>
				<div className="overlay">
					<div className="container">
						<div className="movieDetails">
							<h1 data-testid="movie-title">{data.title}</h1>
							<div className="dates">
								<span data-testid="movie-release-date">
									{new Date(data.release_date).toISOString().split(".")[0] +
										"Z"}
								</span>
								<div className="runtime">
									<span data-testid="movie-runtime">{data.runtime}</span>
									<span>mins</span>
								</div>
							</div>
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
							<div className="genres">
								{data.genres.map((genre) => (
									<span key={genre.id}>{genre.name}</span>
								))}
							</div>
							<div className="desc" data-testid="movie-runtime">
								{data.overview}
							</div>
							<div className="buttons">
								<button>
									<img src="/Play.svg" /> <span>Watch trailer</span>
								</button>
								<button
									onClick={() => {
										setAdd(!add);
									}}
									className="fav"
									style={{ backgroundColor: add ? "#FFCC70" : "#be123c" }}
								>
									+ Add To Favourite
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default MovieDetails;

export const loader = async ({ params }) => {
	try {
		const movieId = params.id;
		const apiKey = import.meta.env.VITE_API_KEY;
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/${movieId}?language=en-US&api_key=${apiKey}&limit=10`
		);
		return data;
	} catch (error) {
		throw json(
			{
				status_message: "The resource you requested could not be found.",
			},
			{ status: 404 }
		);
	}
};
