import React, { useRef, useEffect, useState } from "react";
import styles from "./Header.module.css";
import Navbar from "./Navbar.jsx";
import NavMobile from "./NavMobile.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import useMedia from "./useMedia";

const Header = () => {
  const mobile = useMedia("(max-width: 58rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  useEffect(() => {
    setMobileMenu(mobile);
    console.log(mobileMenu);
  }, [mobile]);

  return (
    <header className={`${styles.header} container`}>
      <div className={styles.header__topBar}>
        <h4 className={`${styles.header__topBarText} font_1_xs cor_1`}>
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "#f4c82a", marginRight: ".5rem" }}
          />
          Get a FREE Expert Audit of Your{" "}
          <a className="font_1_l" href="">
            {" "}
            Website, App, or Product{" "}
          </a>
          <FontAwesomeIcon
            icon={faStar}
            style={{ color: "#f4c82a", marginLeft: ".5rem" }}
          />
        </h4>
      </div>
      {!mobileMenu ? <Navbar /> : <NavMobile />}
    </header>
  );
};

export default Header;
