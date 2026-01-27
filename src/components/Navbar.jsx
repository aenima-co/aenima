import React, { useRef, useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Button from "./Button";

const Navbar = () => {
  const indicatorRef = useRef(null);
  const itemsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    moveIndicator(activeIndex);
  }, []);

  const moveIndicator = (index) => {
    const item = itemsRef.current[index];
    const indicator = indicatorRef.current;

    if (!item || !indicator) return;

    indicator.style.left = `${item.offsetLeft}px`;
    indicator.style.top = `${item.offsetTop}px`;
    indicator.style.width = `${item.offsetWidth}px`;
    indicator.style.height = `${item.offsetHeight}px`;
  };

  return (
    <>
      <nav className={styles.nav}>
        <a href="/.">
          <img src="../src/assets/logo.png" alt="Aenima Logo" />
        </a>
        <ul className={styles.menu}>
          {["Home", "Work", "About", "Blog"].map((item, index) => (
            <li
              key={item}
              ref={(el) => (itemsRef.current[index] = el)}
              className={styles.menuItem}
              onMouseEnter={() => moveIndicator(index)}
              onClick={() => setActiveIndex(index)}
            >
              <a className="font_1_m" href="#">
                {item}
              </a>
            </li>
          ))}
          <span ref={indicatorRef} className={styles.indicator} />
        </ul>
        <Button nome={"Contact us"} variant={"dark"} />
      </nav>
    </>
  );
};

export default Navbar;
