import styles from "./kv.module.css";

export const KVBox = ({ title, children }) => {
  return (
    <section className={styles.kv}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
