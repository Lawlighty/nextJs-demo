import Link from "next/link";
import Image from "next/image";
import FourOhFourSVG from "@/public/404.svg";
import cName from "classnames";
import styles from "./404.module.scss";

export default function FourOhFour() {
  return (
    <div className={cName({ [styles["fof-wrapper"]]: true })}>
      <Image src={FourOhFourSVG} alt="404" layout="fill"></Image>

      <div className={cName({ [styles["fof-tips"]]: true })}>
        <h1>Take a breath.</h1>
        <p>
          That page does not exist but you can explore our Website.
          {/* <Link href="/">
            <a>Go back home</a>
          </Link> */}
          {/* <Link href="/">Go back home</Link> */}
        </p>
      </div>
    </div>
  );
}
