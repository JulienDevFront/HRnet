import closeIcon from "../assets/close_icon.svg";
import { Link } from "react-router";

type HeaderProps = {
	to: string;
	showClose?: boolean;
};

/**
 * The component displays the main header with a link `to` the home page with a optional possibility `showClose` for display a button to close the modal
 * - - -
 * @param to type `string`
 * @param showClose type `bool` default type is `false`
 */
export default function Header({ to, showClose = false }: HeaderProps) {
	return (
		<header className={styles.header}>
			<h1>
				<Link to={to} aria-label="Click for back home">
					HRnet
				</Link>
			</h1>

			{showClose && (
				<Link to={to} className={styles.showClose} aria-label="Click for close modal">
					<img src={closeIcon} alt="Close modal" />
				</Link>
			)}
		</header>
	);
}

const styles = {
	header: "flex justify-between font-bold text-xl",
	showClose: "rounded-sm border-2 border-solid size-sm hover:bg-blue-400",
};
