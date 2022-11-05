import Image from "next/image";
import cName from "classnames";
import styles from "./styles.module.scss";

const Avatar = () => {
  return (
    <div className={styles["aboutMe-wrapper"]}>
      <img
        className={cName({
          [styles.animatedBorder]: true,
        })}
        src="https://images.vexels.com/media/users/3/145908/raw/52eabf633ca6414e60a7677b0b917d92-male-avatar-maker.jpg?w=330&fmt=webp"
        alt="头像"
      ></img>
    </div>
  );
};
export default Avatar;
