import React from "react";
import styles from "./Header.module.css";
import Navbar from "./Navbar.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className={styles.header}>
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
      <Navbar />
    </header>
  );
};

export default Header;
