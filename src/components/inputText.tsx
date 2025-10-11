type InputTextProps = {
  label: string;
  name: string;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

/**
 * this component displays a input of `text type` personalized with a `placeholder` and a `label`
 * - - -
 * @param label type `string`
 * @param name type `string`
 * @param placeholder type `string`
 * @param onChange type `event`
 */
export default function InputText({ label, name, placeholder, onChange }: InputTextProps) {
  return (
    <label className={styles.label}>
      <span className={styles.span}>{label}</span>
      <input type="text" name={name} placeholder={placeholder} required className={styles.input} onChange={onChange} />
    </label>
  );
}

const styles = {
  label: "mb-8 flex flex-col gap-1 font-bold",
  span: "px-4 max-md:text-xs md:text-sm lg:text-base",
  input:
    "cursor-pointer rounded-sm border-1 border-neutral-50 bg-neutral-300 px-4 py-2 font-light outline-none focus:border-2 focus:bg-neutral-50 max-md:text-xs md:text-sm lg:text-base",
};
