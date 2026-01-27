import React from "react";
import styles from "./NavMobile.module.css";
const NavMobile = () => {
  return (
    <nav className={styles.navMobile}>
      {" "}
      <a href="/." onClick={(e) => e.preventDefault()}>
        <img src="../src/assets/logo.png" alt="Aenima Logo" />
      </a>
      <button className={styles.mobileButton}></button>
    </nav>
  );
};

export default NavMobile;
