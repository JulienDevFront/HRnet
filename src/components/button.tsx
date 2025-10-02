import { Link } from "react-router";
import styles from "../assets/styles/components/button.module.scss";

type ButtonProps = {
	path: string;
	text: string;
};

export default function Button({ path, text }: ButtonProps) {
	return (
		<Link to={path} className={styles.button}>
			{text}
		</Link>
	);
}
