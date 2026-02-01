import React from "react";
import styles from "./Button.module.css";
import Arrow from "../assets/arrow.svg?react";

const Button = ({ nome, variant, ...props }) => {
  return (
    <button className={`${styles.btn} ${styles[variant]}`} {...props}>
      {nome}
      <span className={styles.arrowWrapper}>
        <Arrow className={styles.arrowIcon} />
      </span>
    </button>
  );
};

export default Button;
