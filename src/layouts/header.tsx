import styles from "../assets/styles/layouts/header.module.scss";
import close_icon from "../assets/images/close_icon.svg";
import { Link } from "react-router";

type HeaderProps = {
	to: string;
	showClose: boolean;
};

export default function Header({ to, showClose = false }: HeaderProps) {
	return (
		<header className={styles.header}>
			<h1>
				<Link to={to} aria-label="Click for back home">HRnet</Link>
			</h1>

			{showClose && (
				<Link to={to} className={styles.header__showClose} aria-label="Click for close modal">
					<img src={close_icon} alt="Close modal" />
				</Link>
			)}
		</header>
	);
}
