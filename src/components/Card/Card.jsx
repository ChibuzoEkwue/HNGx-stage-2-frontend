import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ poster_path, title, path, release_date }) => {
	return (
		<Link className="card" to={`/movies/${path}`} data-testid="movie-card">
			<div className="posterImg">
				<img
					data-testid="movie-poster"
					src={`https://image.tmdb.org/t/p/original${poster_path}`}
					alt={title}
				/>
			</div>
			<div className="movieDetails">
				<h4 data-testid="movie-title">{title}</h4>
				<div className="rating">
					<div className="rate">
						<img src="/imdb.svg" />
						<span>89.0 / 100</span>
					</div>
					<div className="rate ">
						<img src="/tomato.svg" className="tomato" />
						<span>97%</span>
					</div>
				</div>
				<p data-testid="movie-release-date">{release_date}</p>
			</div>
		</Link>
	);
};

export default Card;
