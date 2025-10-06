import { Outlet } from "react-router";
import Footer from "./footer";

/**
 *
 */
export default function Root() {
  return (
    <div className="flex min-h-dvh justify-center p-16 bg-neutral-200">
      <Outlet />
      <Footer />
    </div>
  );
}
