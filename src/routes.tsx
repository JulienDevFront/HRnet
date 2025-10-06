import Root from "./layouts/root.tsx";
import HomePage from "./pages/homePage.tsx";
import ErrorPage from "./pages/errorPage.tsx";
import ListEmployeePage from "./pages/listEmployeePage.tsx";
import AddEmployePage from "./pages/addEmployePage.tsx";
import { createBrowserRouter } from "react-router";

export const routes = createBrowserRouter([
	{
		path: "/",
		Component: Root,
		ErrorBoundary: ErrorPage,
		children: [
			{
				index: true,
				Component: HomePage,
			},
			{
				path: "/listEmploye",
				Component: ListEmployeePage,
			},
			{
				path: "/addEmploye",
				Component: AddEmployePage,
			},
		],
	},
]);
