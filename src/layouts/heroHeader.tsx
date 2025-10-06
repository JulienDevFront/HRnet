type HeroHeaderProps = {
  img: string;
  alt: string;
};

/**
 * This component return a `HeroHeader` with an `image` and a attribut `alt` personalize
 * - - -
 * @param img type `string`
 * @param alt type `string`
 */
export default function HeroHeader({ img, alt }: HeroHeaderProps) {
  return (
    <aside>
      <img src={img} alt={alt} className={styles.img} />
    </aside>
  );
}

const styles = {
  img: "m-auto",
};
