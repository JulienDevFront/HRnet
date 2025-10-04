type InputProps = {
	label: string;
	type: string;
	placeholder: string;
};

export default function Input({ label, type, placeholder }: InputProps) {
	return (
		<label>
			{label}
			<input type={type} placeholder={placeholder} required />
		</label>
	);
}
