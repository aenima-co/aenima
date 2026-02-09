import React from "react";
import styles from "./Hero.module.css";
import ana from "../assets/ana.png";
import bruna from "../assets/bruna.png";
import rafa from "../assets/rafa.png";
import Button from "./Button";
import useMedia from "./useMedia";

const Hero = () => {
  const mobile = useMedia("(max-width: 42rem)");

  return (
    <div className={`${styles.heroBg}`}>
      <ul className={styles.teamWrapper}>
        <li className={`${styles.team}`}>
          <img src={ana} alt="Team picture" />
        </li>
        <li className={styles.team}>
          <img src={bruna} alt="Team picture" />
        </li>
        <li className={styles.team}>
          <img src={rafa} alt="Team picture" />
        </li>
      </ul>
      <div className={styles.content}>
        <div className={styles.contentParagraph}>
          <p className="font_1_xs">
            We are a brazilian digital studio that deliver globally UI, UX & Web
            Design smoothly, without delay, saving your time and money with an
            efficient process.
          </p>
        </div>
        <div className={styles.contentText}>
          <h1 className="font_2_xs">
            let your dreams be <br />
            <span className="font_5_m">online & beyond</span>
          </h1>
          <Button
            nome="Start a project"
            variant="light"
            style={{ alignSelf: mobile ? "start" : "end" }}
          />
        </div>
      </div>
    </div>
  );
};
export default Hero;
