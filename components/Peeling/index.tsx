import { Themes } from "@/constants/enum";
import { ThemeContext } from "@/stores/theme";
import Script from "next/script";
import { useContext, useEffect } from "react";
import styles from "./styles.module.scss";
const Peeling = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <label style={{ zoom: 0.3 }}>
      <Script src="https://code.iconify.design/1/1.0.4/iconify.min.js"></Script>
      {/* <input className={styles["toggle-checkbox"]} type="checkbox"></input> */}
      <div
        className={
          theme === Themes.light
            ? styles["toggle-checkbox"]
            : styles["toggle-checkbox-no-checked"]
        }
      >
        <div className={styles["toggle-slot"]}>
          {theme === Themes.light && (
            <div
              className={styles["sun-icon-wrapper"]}
              onClick={(): void => {
                setTheme(Themes.dark);
              }}
            >
              <div
                className={`iconify ${styles["sun-icon"]} `}
                data-icon="feather-sun"
                data-inline="false"
              ></div>
            </div>
          )}
          <div className={styles["toggle-button"]}></div>
          {theme !== Themes.light && (
            <div
              className={styles["moon-icon-wrapper"]}
              onClick={(): void => {
                setTheme(Themes.light);
              }}
            >
              <div
                className={`iconify ${styles["moon-icon"]} `}
                data-icon="feather-moon"
                data-inline="false"
              ></div>
            </div>
          )}
        </div>
      </div>
    </label>
  );
};
export default Peeling;
