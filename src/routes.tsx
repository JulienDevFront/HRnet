import Root from "./layouts/root.tsx";
import HomePage from "./pages/homePage.tsx";
import ErrorPage from "./pages/errorPage.tsx";
import ListEmployeePage from "./pages/listEmployeePage.tsx";
import AddEmployeePage from "./pages/addEmployeePage.tsx";
import { createBrowserRouter } from "react-router";

/**
 * This function return the `routes` of the app
 * - - -
 * @path `/`
 * @path `/listEmployee`
 * @path `/addEmployee`
 */
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
        path: "/listEmployee",
        Component: ListEmployeePage,
      },
      {
        path: "/addEmployee",
        Component: AddEmployeePage,
      },
    ],
  },
]);
