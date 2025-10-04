/**
 * This function return a `footer` component
 */
export default function Footer() {
	return <footer className={styles.footer}>copyright @2025 HRnet author Julien Genty</footer>;
}

const styles = {
	footer: "fixed bottom-0 right-0 left-0 p-4 text-center bg-neutral-800 text-neutral-200",
};
