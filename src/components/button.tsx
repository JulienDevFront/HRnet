import { Link } from "react-router";

type ButtonProps = {
	path: string;
	text: string;
};

export default function Button({ path, text }: ButtonProps) {
	return <Link to={path}>{text}</Link>;
}
