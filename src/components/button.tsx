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
    "block p-4 bg-neutral-800 border-2 border-neutral-800 text-center  text-neutral-300 rounded-sm hover:bg-neutral-300 hover:text-neutral-800 transition-all duration-100 ease-in-out font-bold mb-4",
};
