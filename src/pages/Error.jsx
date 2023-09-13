import { useRouteError } from "react-router-dom";
import "./error.scss";
import { Helmet } from "react-helmet-async";

const Error = () => {
	const error = useRouteError();
	return (
		<>
			<Helmet>
				<title>Error Page</title>
			</Helmet>
			<div className="errorContainer">
				<div className="errorMessage">
					<h2>{error.status}</h2>
					<h3>{error.data.status_message}</h3>
				</div>
			</div>
		</>
	);
};

export default Error;
