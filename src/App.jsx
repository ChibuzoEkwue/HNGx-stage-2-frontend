import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
const App = () => {
  
	const router = createBrowserRouter([
		{
			element: <Layout />,
			children: [
				{
					index: true,
					element: <Home />,
				},
			],
		},
	]);
	return <RouterProvider router={router} />;
};

export default App;
