import React from "react";
import { useState } from "react";
import styles from "./NavMobile.module.css";

const NavMobile = () => {
  const [active, setActive] = React.useState(false);

  function handleClick() {
    setActive((active) => !active);
  }

  return (
    <nav className={styles.navMobile}>
      {" "}
      <a href="/." onClick={(e) => e.preventDefault()}>
        <img src="../src/assets/logo.png" alt="Aenima Logo" />
      </a>
      <button
        onClick={handleClick}
        className={
          active
            ? `${styles.mobileButton} ${styles.activeButton}`
            : `${styles.mobileButton} ${styles.primaryButton}`
        }
      ></button>
      {}
    </nav>
  );
};

export default NavMobile;
