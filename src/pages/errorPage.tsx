import styles from "../assets/styles/pages/errorPage.module.scss";
import error_page from "../assets/images/error_page_image.svg";
import { Link } from "react-router";
import { isRouteErrorResponse, useRouteError } from "react-router";

export default function ErrorBoundary() {
	const error = useRouteError();

	if (isRouteErrorResponse(error)) {
		return (
			<div className={styles.errorPage}>
				<img src={error_page} alt="Image of error page" />
				<header>
					<h1>{error.status}</h1>
					<h2>{error.statusText}</h2>
				</header>
				<footer>
					{error.data}
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Sunt in culpa qui officia{" "}
					<Link to="/">deserunt mollit anim id est laborum.</Link>
				</footer>
			</div>
		);
	} else if (error instanceof Error) {
		return (
			<div className={styles.errorPage}>
				<img src={error_page} alt="Image of error page" />
				<header>
					<h1>Error</h1>
					<h2>{error.message}</h2>
				</header>
				<footer>
					{error.stack}
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Sunt in culpa qui officia{" "}
					<Link to="/">deserunt mollit anim id est laborum.</Link>
				</footer>
			</div>
		);
	} else {
		return (
			<div className={styles.errorPage}>
				<img src={error_page} alt="Image of error page" />
				<header>
					<h1>Error</h1>
					<h2>form not found</h2>
				</header>
				<footer>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Sunt in culpa qui officia{" "}
					<Link to="/">deserunt mollit anim id est laborum.</Link>
				</footer>
			</div>
		);
	}
}
