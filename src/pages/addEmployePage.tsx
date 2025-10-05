import add_employee from "../assets/add_employee_image.svg";
import Input from "../components/input";
import Header from "../layouts/header";

/**
 * This component return `AddEmployePage`, a page of `HRnet`
 */
export default function AddEmployePage() {
  return (
    <div className={styles.AddEmployePage}>
      <Header to="/" showClose={true} />
      <aside>
        <img className={styles.img} src={add_employee} alt="Illustration" />
      </aside>
      <form className={styles.form}>
        <Input label="name" type="text" placeholder="Harry" />
        <Input label="last name" type="text" placeholder="Potter" />
        <Input
          label="email address"
          type="email"
          placeholder="HarryPotter@gmail.com"
        />
        <Input label="date of birth" type="date" placeholder="" />
        <Input label="date of start" type="date" placeholder="" />
        <fieldset>
          <Input label="street" type="text" placeholder="street 3/4" />
          <Input label="city" type="text" placeholder="london" />
          <Input label="country" type="text" placeholder="England" />
        </fieldset>
        <fieldset>
          <Input label="department" type="text" placeholder="griffon d'or" />
          <Input label="zip code" type="number" placeholder="731" />
        </fieldset>
        <input type="submit" value="create" className={styles.inputSubmit} />
      </form>
    </div>
  );
}

const styles = {
  AddEmployePage: "w-3xl",
  img: "m-auto",
  form: "mb-16",
  inputSubmit:
    "block w-full cursor-pointer rounded-sm border-2 border-neutral-800 bg-neutral-800 p-4 text-center font-bold text-neutral-200 transition-all duration-100 ease-in-out hover:bg-neutral-600",
};
