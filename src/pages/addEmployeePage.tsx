import { useState } from "react";
import image from "../assets/add_employee_image.svg";
import Input from "../components/input";
import Header from "../layouts/header";
import HeroHeader from "../layouts/heroHeader";
import { methodPOST } from "../services/storage.service";
import { EMPLOYEE, formatEMPLOYEE } from "../services/employee.service";
import { Link } from "react-router";
import { SuccessModal } from "@juuulien/success-modal";
import newEmployeeImage from "../assets/new_employee_image.svg";
/**
 * This component return `AddEmployeePage`, a page of `HRnet`
 */
export default function AddEmployeePage() {
  const [employee, setEmployee] = useState(EMPLOYEE);
  const [showModal, setShowModal] = useState(false);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (evt) => {
    const { value, name } = evt.currentTarget;
    setEmployee((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    methodPOST("employees", formatEMPLOYEE(employee));
    handleClear(evt);
    setShowModal(true);
  };

  const handleClear: React.FormEventHandler<HTMLFormElement> = (evt) => {
    setEmployee(EMPLOYEE);
    evt.currentTarget.reset();
  };

  return showModal ? (
    <SuccessModal
      open={showModal}
      img={newEmployeeImage}
      imgWidth="384"
      imgHeight="384"
      title="Success !"
      message="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      navigate="/listEmployee"
      textNavigate="See Employees"
      wrapperClassName="flex flex-1 flex-col items-center justify-center"
      headerClassName="text-center"
      titleClassName="text-3xl font-bold text-neutral-800"
      messageClassName="mt-8 text-justify text-neutral-800 max-md:p-4 max-md:text-xs md:w-1/2 lg:w-1/2 lg:text-base"
      footerClassName="mt-8"
      navigateClassName="block rounded-lg border-2 border-neutral-50 bg-neutral-200/80 px-8 py-4 text-center font-bold font-light text-neutral-800 shadow-md transition hover:bg-blue-400 hover:shadow-xl"
    />
  ) : (
    <div className={styles.AddEmployePage}>
      <Header to="/" showClose={true} />
      <HeroHeader img={image} alt="illustration" />
      <form onSubmit={handleSubmit}>
        <Input label="name" type="text" name="name" placeholder="Harry" onChange={handleChange} />
        <Input label="last name" type="text" name="lastName" placeholder="Potter" onChange={handleChange} />
        <Input label="email address" type="email" name="email" placeholder="HarryPotter@gmail.com" onChange={handleChange} />
        <Input label="date of birth" type="date" name="birthDate" onChange={handleChange} />
        <Input label="date of start" type="date" name="startDate" onChange={handleChange} />
        <fieldset>
          <Input label="street" type="text" name="street" onChange={handleChange} />
          <Input label="city" type="text" name="city" onChange={handleChange} />
          <Input label="country" type="text" name="country" onChange={handleChange} />
        </fieldset>
        <fieldset>
          <Input label="department" type="text" name="department" onChange={handleChange} />
          <Input label="zip code" type="number" name="zipCode" onChange={handleChange} />
        </fieldset>
        <input type="submit" value="create" className={styles.inputSubmit} />
      </form>
      <section className={styles.section}>
        <p>
          Do you have questions about the processing of your personal data? Consult our personal data policy!{" "}
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
