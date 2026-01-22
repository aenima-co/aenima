import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__topBar}>
        <h4 className={`${styles.header__topBarText} font_1_xs`}>
          <i className="header__link fa-solid fa-star"></i>
          Get a FREE Expert Audit of Your{" "}
          <a className="font_1_l" href="">
            Website, App, or Product
          </a>
          <i
            className="header__link fa-solid fa-star"
            aria-hidden="true"
            style={{ color: "#f4c82a" }}
          ></i>
        </h4>
      </div>
    </div>
  );
};

export default Header;
