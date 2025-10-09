/**
 * This function return a `footer` component
 */
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <h3 className={styles.h3}>HRnet</h3> ©copyright 2025 author Julien Genty
    </footer>
  );
}

const styles = {
  footer:
    "fixed right-0 bottom-0 left-0 flex h-14 items-center justify-center gap-1 bg-neutral-800 text-center text-neutral-200 max-md:text-xs md:text-sm lg:text-base",
  h3: "font-bold",
};
