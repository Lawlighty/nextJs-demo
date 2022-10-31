import { FC } from "react";
import styles from "./styles.module.scss";

const Naruto: FC = () => {
  return (
    <div className={styles.naruto}>
      <section className={styles.head}></section>
      <section className={styles.torso}></section>
      <section className={styles.legs}></section>
      <section className={styles.shadow}></section>
    </div>
  );
};

export default Naruto;
