import image from "../assets/welcome_image.svg";
import Button from "../components/button";
import Header from "../layouts/header";
import HeroHeader from "../layouts/heroHeader";

/**
 * This component return `HomePage`, a page of `HRnet`
 */
export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <Header to="/" />
      <HeroHeader img={image} alt="illustration" />
      <nav className={styles.nav}>
        <Button path="/addEmploye" text="create new employee" />
        <Button path="/listEmploye" text="consult the employees" />
      </nav>
      <main className={styles.main}>
        <section className="">
          <h2 className={styles.h2}>About HRnet.</h2>
          <p className={styles.p}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
      </main>
    </div>
  );
}

const styles = {
  homePage: "mb-4 flex max-w-3xl flex-1 flex-col items-center justify-center",
  aside: "w-96",
  nav: "w-96",
  main: "mt-8",
  section: "",
  h2: "text-right leading-8 font-bold",
  p: "text-justify leading-8",
};
