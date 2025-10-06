import Header from "../layouts/header";
import image from "../assets/consult_employee_image.svg";
import SelectCount from "../components/selectCount";
import InputSearch from "../components/inputSearch";
import HeroHeader from "../layouts/heroHeader";

/**
 * This component return `ListEmployePage`, a page of `HRnet`
 */
export default function ListEmployePage() {
  return (
    <div className={styles.ListEmployePage}>
      <Header to="/" showClose={true} />
      <HeroHeader img={image} alt="illustration" />
      <section className={styles.section}>
        <SelectCount />
        <InputSearch />
      </section>
      <main>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <th className={styles.th_left}>name</th>
              <th className={styles.th}>birth</th>
              <th className={styles.th}>start</th>
              <th className={styles.th}>street</th>
              <th className={styles.th}>city</th>
              <th className={styles.th}>country</th>
              <th className={styles.th}>dep</th>
              <th className={styles.th_right}>code</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </main>
    </div>
  );
}

const styles = {
  ListEmployePage: "w-3xl",
  section: "flex justify-between px-16",
  table: "mt-8 mb-8 w-3xl table-fixed",
  thead: "bg-neutral-800 text-sm text-neutral-200",
  th: "border-r-2 border-neutral-200 bg-neutral-800 p-3 text-left",
  th_left:
    "rounded-tl-xl border-r-2 border-neutral-200 bg-neutral-800 p-3 text-left",
  th_right:
    "rounded-tr-xl border-r-2 border-neutral-200 bg-neutral-800 p-3 text-left",
};
