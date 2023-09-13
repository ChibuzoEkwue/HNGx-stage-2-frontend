import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Search from "./pages/Search";
import MovieDetails,{loader as movieDetailsLoader} from "./pages/MovieDetails";
import ErrorPage from "./pages/Error";
const App = () => {
	const router = createBrowserRouter([
		{
			element: <Layout />,
			errorElement:<ErrorPage/>,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: "/search",
					element: <Search />,
				},
				{
					path: "/movies/:id",
					element: <MovieDetails />,
					loader:movieDetailsLoader
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
};

export default App;
