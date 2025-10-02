import HomePage from "./pages/homePage.tsx";
import ErrorPage from "./pages/errorPage.tsx";
import ListEmployePage from "./pages/listEmployePage.tsx";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
	{
		path: "/",
		ErrorBoundary: ErrorPage,
		children: [
			{
				index: true,
				Component: HomePage,
			},
			{
				path: "/listEmploye",
				Component: ListEmployePage,
			},
		],
	},
]);
