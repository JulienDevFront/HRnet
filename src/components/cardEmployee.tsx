import closeCardIcon from "../assets/closeCard.icon.svg";
import userCardIcon from "../assets/userCard.icon.svg";
import locationCardIcon from "../assets/locationCard.icon.svg";
import companyCardIcon from "../assets/companyCard.icon.svg";

type CardEmployeeProps = {
  name: string;
  lastName: string;
  birthDate: string;
  startDate: string;
  street: string;
  city: string;
  country: string;
  department: string;
  zipCode: string;
  onDelete: React.MouseEventHandler<HTMLButtonElement>;
};

/**
 * This component return a `card employee` for the list of employees
 * - - -
 * @param name type `string`;
 * @param lastName type `string`;
 * @param birthDate type `string`;
 * @param startDate type `string`;
 * @param street type `string`;
 * @param city type `string`;
 * @param country type `string`;
 * @param department type `string`;
 * @param zipCode type `string`;
 * @param onDelete type `callback function`
 */
export default function CardEmployee(props: CardEmployeeProps) {
  return (
    <article className={styles.article}>
      <header className={styles.header}>
        <h3 className={styles.headerTitle}>
          {props.name} {props.lastName}
        </h3>
        <button onClick={props.onDelete} className={styles.button} aria-label="Delete employe">
          <img src={closeCardIcon} alt="" aria-hidden="true" />
        </button>
      </header>
      <footer className={styles.footer}>
        <section className={styles.section}>
          <img src={userCardIcon} alt="" aria-hidden="true" />
          <p className={styles.sectionText}>
            {props.name} {props.lastName} born on {props.birthDate}
          </p>
        </section>
        <section className={styles.section}>
          <img src={locationCardIcon} alt="" aria-hidden="true" />
          <p className={styles.sectionText}>
            Resides at {props.street} - {props.city} {props.zipCode} - {props.country}
          </p>
        </section>
        <section className={styles.section}>
          <img src={companyCardIcon} alt="" aria-hidden="true" />
          <p className={styles.sectionText}>
            Working in the {props.department} since {props.startDate}
          </p>
        </section>
      </footer>
    </article>
  );
}

const styles = {
  article: "mt-4 rounded-lg border-2 border-neutral-50 bg-neutral-200/80 p-4 font-light text-neutral-800 shadow-md",
  header: "flex justify-between",
  headerTitle: "text-base font-bold text-neutral-800",
  button: "flex h-3.5 w-3.5 cursor-pointer items-center justify-center rounded-xs border border-neutral-800 bg-neutral-100 p-0.5 transition hover:bg-blue-400",
  footer: "mt-4 flex flex-col gap-1",
  section: "flex items-baseline gap-2",
  sectionText: "text-xs font-light",
};
