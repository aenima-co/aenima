import React from "react";
import { useState } from "react";
import styles from "./NavMobile.module.css";
import Button from "./Button";

const NavMobile = () => {
  const [active, setActive] = React.useState(false);
  const [menuFocus, setMenuFocus] = React.useState(0);

  return (
    <nav className={styles.navMobile}>
      {" "}
      <a href="/." onClick={(e) => e.preventDefault()}>
        <img src="../src/assets/logo.png" alt="Aenima Logo" />
      </a>
      <button
        onClick={() => setActive(!active)}
        className={`${styles.mobileButton} ${
          active ? styles.activeButton : styles.primaryButton
        }`}
      ></button>
      {active ? (
        <ul className={`${styles.dropDown} font_1_m`}>
          {["Home", "Work", "About", "Blog"].map((item, index) => (
            <li
              key={item}
              className={`${styles.menu} ${menuFocus === index ? styles.activeMenu : styles.inactiveMenu}`}
              onMouseOver={() => setMenuFocus(index)}
            >
              <a className="font_1_m" href="#">
                {item}
              </a>
            </li>
          ))}
          <Button nome={"Contact us"} variant={["light", "dropdown"]} />
        </ul>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default NavMobile;
