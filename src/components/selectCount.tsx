/**
 *
 */
export default function SelectCount() {
  return (
    <label className={styles.label}>
      show
      <select name="showCountEntries" className={styles.select}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
      entries
    </label>
  );
}

const styles = {
  label: "flex items-end gap-2 leading-4 font-bold",
  select:
    "rounded-sm bg-neutral-800 p-0.5 text-center text-sm font-medium text-neutral-200",
};
