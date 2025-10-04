import styles from "../assets/styles/components/input.module.scss";

type InputProps = {
	label: string;
	type: string;
	placeholder: string;
};

export default function Input({ label, type, placeholder }: InputProps) {
	return (
		<label className={styles.input}>
			{label}
			<input type={type} placeholder={placeholder} required />
		</label>
	);
}
