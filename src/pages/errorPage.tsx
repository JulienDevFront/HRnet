import image from "../assets/error_page_image.svg";
import { Link } from "react-router";
import { isRouteErrorResponse, useRouteError } from "react-router";
import HeroHeader from "../layouts/heroHeader";

/**
 * This component return `ErrorBoundary`, a page of `HRnet`
 */
export default function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <div className={styles.ErrorBoundary}>
        <div className={styles.container}>
          <HeroHeader img={image} alt="Image of error page" />
          <header>
            <h1 className={styles.h1}>{error.status}</h1>
            <h2 className={styles.h2}>{error.statusText}</h2>
          </header>
          <footer className={styles.footer}>
            {error.data}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sunt in
            culpa qui officia{" "}
            <Link to="/" className={styles.link}>
              deserunt mollit anim id est laborum.
            </Link>
          </footer>
        </div>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div className={styles.ErrorBoundary}>
        <div className={styles.container}>
          <HeroHeader img={image} alt="Image of error page" />
          <header>
            <h1 className={styles.h1}>Error</h1>
            <h2 className={styles.h2}>{error.message}</h2>
          </header>
          <footer className={styles.footer}>
            {error.stack}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sunt in
            culpa qui officia{" "}
            <Link to="/" className={styles.link}>
              deserunt mollit anim id est laborum.
            </Link>
          </footer>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.ErrorBoundary}>
        <div className={styles.container}>
          <HeroHeader img={image} alt="Image of error page" />
          <header>
            <h1 className={styles.h1}>Error</h1>
            <h2 className={styles.h2}>form not found</h2>
          </header>
          <footer className={styles.footer}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Sunt in
            culpa qui officia{" "}
            <Link to="/" className={styles.link}>
              deserunt mollit anim id est laborum.
            </Link>
          </footer>
        </div>
      </div>
    );
  }
}

const styles = {
  ErrorBoundary:
    "flex min-h-dvh flex-col justify-center items-center bg-neutral-200 p-16",
  container: "max-w-3xl",
  h1: "text-center text-8xl font-bold",
  h2: "font-bold mt-4",
  footer: "text-justify",
  link: "font-bold underline",
};
