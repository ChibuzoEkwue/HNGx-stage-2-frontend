import "./Header.scss";
import { useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
const Header = () => {
	const searchInputRef = useRef();

	const navigate = useNavigate();
	const searchMovieHandler = (e) => {
		e.preventDefault();

		if (searchInputRef.current.value === "") {
			alert("We would love to know the movie you are looking for");
			return;
		}
		const query = encodeURIComponent(searchInputRef.current.value.trim());
		navigate(`/search?q=${query}`);
		
	};
	return (
		<header>
			<div className="container">
				<nav>
					<Link className="logo" to="/">
						<img src="/tv.svg" alt="Movie Box Logo" />
						<h2>MovieBox</h2>
					</Link>
					<form className="search" onSubmit={searchMovieHandler}>
						<input
							type="text"
							placeholder="What do you want to watch?"
							ref={searchInputRef}
						/>
						<button type="submit">
							Search
						</button>
					</form>
					<div className="actions">
						<h2>Sign in</h2>
						<img src="/Menu.svg" alt="Menu" />
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
