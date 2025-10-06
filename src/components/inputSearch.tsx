/**
 *
 */
export default function InputSearch() {
  return (
    <label>
      <input type="search" placeholder="search" className={styles.input} />
    </label>
  );
}

const styles = {
  input: "border-b-2 p-2 text-right outline-0 focus:border-blue-400",
};
