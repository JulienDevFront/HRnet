import styles from "../assets/styles/pages/homePage.module.scss";
import welcome_image from "../assets/images/welcome_image.svg";
import Button from "../components/button";

export default function HomePage() {
	return (
		<div className={styles.homePage}>
			<header>
				<h1>HRnet.</h1>
			</header>
			<aside>
				<img src={welcome_image} alt="welcome image" />
			</aside>
			<nav>
				<Button path="/addEmploye" text="create new employee" />
				<Button path="/listEmploye" text="consult the employees" />
			</nav>
			<main>
				<section>
					<h2>About HRnet.</h2>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
					nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
					fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
					amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
					dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
					commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
					esse cillum dolore eu fugiat nulla pariatur.
				</section>
			</main>
			<footer>copyright @2025 HRnet author Julien Genty</footer>
		</div>
	);
}
