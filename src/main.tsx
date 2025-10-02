import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import logo from "./assets/images/logo.png";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<h1>Hello world</h1>
		<img src={logo} alt="logo" />
	</StrictMode>
);
