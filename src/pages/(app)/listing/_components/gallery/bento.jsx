import styles from "./gallery.module.css";

/**
 *
 * @param {string[]} param0.images
 * @returns
 */
export const PhotoBento = ({ images }) => {
  return (
    <section className={styles.gallery}>
      {images.slice(0, 5).map((t) => (
        <img src={t} />
      ))}
    </section>
  );
};
