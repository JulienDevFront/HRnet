import { Outlet } from "react-router";
import Footer from "./footer";

/**
 * This function return the wrapper `root` component
 */
export default function Root() {
  return (
    <div className={styles.root}>
      <Outlet />
      <Footer />
    </div>
  );
}

const styles = {
  root: "flex min-h-dvh justify-center bg-neutral-300 pb-14 max-md:px-4 md:px-8 lg:px-16",
};
