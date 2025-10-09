import { Link } from "react-router";

type ButtonProps = {
  path: string;
  text: string;
};

/**
 * The component displays a button with a link `to` toward a personalized path
 * - - -
 * @param path type `string`
 * @param text type `sting`
 */
export default function Button({ path, text }: ButtonProps) {
  return (
    <Link to={path} className={styles.button}>
      {text}
    </Link>
  );
}

const styles = {
  button:
    "mb-4 block rounded-sm border-2 border-neutral-800 bg-neutral-800 p-4 text-center font-bold text-neutral-300 transition-all duration-100 ease-in-out hover:bg-blue-400 hover:text-neutral-800 max-md:text-xs md:text-sm lg:text-base",
};
