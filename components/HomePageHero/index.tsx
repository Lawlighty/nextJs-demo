import { useEffect, useRef } from "react";
import Rellax from "rellax";
import styles from "./styles.module.scss";
const HomePageHero = () => {
  const rellaxRef = useRef();
  useEffect(() => {
    let rellax = new Rellax(".rellax", {
      wrapper: "#__next",
    });
  });
  return (
    <>
      <section className={styles["homePage-hero"]}>
        <div className={styles["hero-background"]}>
          <div className={styles["hero-parallax-wrapper-slow"]}>
            {/* <Parallax speed={-8}> */}
            <div className="rellax" data-rellax-speed="-8">
              <h1 className={styles["homePage-hero-title"]}>Hello</h1>

              <h6 className={styles["homePage-hero-subtitle"]}>
                Lawlighty&apos;s WebSite!
              </h6>
            </div>
          </div>
        </div>
        <div className={styles["hero-parallax-wrapper-fast"]}>
          {/* <Parallax speed={4} percentage={0.6}> */}

          <div
            data-rellax-speed="4"
            // data-rellax-percentage="0.55"
            className={`rellax ${styles["hero-overlay"]}`}
          ></div>
        </div>
      </section>
    </>
  );
};
export default HomePageHero;
