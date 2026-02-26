import React, { useRef, useEffect, useState } from "react";
import styles from "./Header.module.css";
import Navbar from "./Navbar.jsx";
import NavMobile from "./NavMobile.jsx";
import useMedia from "./useMedia.jsx";

const Header = () => {
  const mobile = useMedia("(max-width: 58rem)");

  return (
    <header className={`${styles.header} container`}>
      <div className={styles.header__topBar}>
        <h4 className={`${styles.header__topBarText} font_1_xs cor_1`}>
          ⭐ Get a FREE Expert Audit of Your{" "}
          <span className="font_1_l" href="">
            {" "}
            Website, App, or Product{" "}
          </span>
          ⭐
        </h4>
      </div>
      {!mobile ? <Navbar /> : <NavMobile />}
    </header>
  );
};

export default Header;
