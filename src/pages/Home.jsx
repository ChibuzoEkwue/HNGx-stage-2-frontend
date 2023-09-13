import { Helmet } from "react-helmet-async";
import Featured from "../components/Featured/Featured";
import FeaturedMovies from "../components/FeaturedMovies/FeaturedMovies";
import "./Home.scss";

const Home = () => {
	return (
		<>
			<Helmet>
				<title>Movie Box</title>
			</Helmet>
			<section className="home">
				<Featured />
				<FeaturedMovies />
			</section>
		</>
	);
};

export default Home;
