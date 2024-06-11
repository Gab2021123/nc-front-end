interface Props extends HTMLAttributes<HTMLElement> {}
import { HTMLAttributes } from "react";
import styles from "./Wave.module.css";
function Wave(props: Props) {
  return (
    <div className={`${props.className} h-[5%]  width:100%  bg-[#015871]`}>
      <section className={styles.wave}></section>
    </div>
  );
}

export default Wave;
