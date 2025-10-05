type InputProps = {
  label: string;
  type: string;
  placeholder: string;
};

/**
 * this component displays a input of `type` personalized with a `placeholder` and a `label`
 * - - -
 * @param label type `string`
 * @param type type `string`
 * @param placeholder type `string`
 */
export default function Input({ label, type, placeholder }: InputProps) {
  return (
    <label className={styles.label}>
      {label}
      <input
        type={type}
        placeholder={placeholder}
        required
        className={styles.input}
      />
    </label>
  );
}

const styles = {
  label: "mb-8 flex flex-col gap-1 font-bold",
  input:
    "cursor-pointer rounded-sm border-2 border-neutral-300 bg-neutral-300 p-2 px-4 font-light outline-none focus:border-2 focus:bg-neutral-50",
};
