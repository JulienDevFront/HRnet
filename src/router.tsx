import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { routes } from "./routes.tsx";
import "./assets/styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<RouterProvider router={routes} />
	</StrictMode>
);
