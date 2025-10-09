import { useState } from "react";
import image from "../assets/add_employee_image.svg";
import Input from "../components/input";
import Header from "../layouts/header";
import HeroHeader from "../layouts/heroHeader";
import { methodPOST } from "../services/storage.service";
import { EMPLOYEE, formatEMPLOYEE } from "../services/employee.service";
import { Link } from "react-router";

/**
 * This component return `AddEmployeePage`, a page of `HRnet`
 */
export default function AddEmployeePage() {
  const [employee, setEmployee] = useState(EMPLOYEE);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    const { value, name } = evt.currentTarget;
    return setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    methodPOST("employees", formatEMPLOYEE(employee));
    handleClear(evt);
  };

  const handleClear: React.FormEventHandler<HTMLFormElement> = (evt) => {
    setEmployee(EMPLOYEE);
    evt.currentTarget.reset();
  };

  return (
    <div className={styles.AddEmployePage}>
      <Header to="/" showClose={true} />
      <HeroHeader img={image} alt="illustration" />
      <form onSubmit={handleSubmit}>
        <Input label="name" type="text" name="name" placeholder="Harry" onChange={handleChange} />
        <Input label="last name" type="text" name="lastName" placeholder="Potter" onChange={handleChange} />
        <Input label="email address" type="email" name="email" placeholder="HarryPotter@gmail.com" onChange={handleChange} />
        <Input label="date of birth" type="date" name="birthDate" placeholder="" onChange={handleChange} />
        <Input label="date of start" type="date" name="startDate" placeholder="" onChange={handleChange} />
        <fieldset>
          <Input label="street" type="text" name="street" placeholder="street 3/4" onChange={handleChange} />
          <Input label="city" type="text" name="city" placeholder="london" onChange={handleChange} />
          <Input label="country" type="text" name="country" placeholder="England" onChange={handleChange} />
        </fieldset>
        <fieldset>
          <Input label="department" type="text" name="department" placeholder="griffon d'or" onChange={handleChange} />
          <Input label="zip code" type="number" name="zipCode" placeholder="731" onChange={handleChange} />
        </fieldset>
        <input type="submit" value="create" className={styles.inputSubmit} />
      </form>
      <section className={styles.section}>
        <p>
          Do you have questions about the processing of your personal data? Consult our personal data policy !{" "}
          <Link to="#" className={styles.link}>
            clicking here.
          </Link>
        </p>
      </section>
    </div>
  );
}

const styles = {
  AddEmployePage: "max-w-5xl flex-1",
  inputSubmit:
    "block w-full cursor-pointer rounded-sm border-2 border-neutral-800 bg-neutral-600 p-4 text-center font-bold text-neutral-200 transition-all duration-100 ease-in-out hover:bg-blue-400 hover:text-neutral-800 max-md:text-xs md:text-sm lg:text-base",
  section: "mt-4 mb-16 text-justify text-neutral-800 max-md:text-xs md:text-sm lg:text-base",
  link: "cursor-pointer underline",
};
