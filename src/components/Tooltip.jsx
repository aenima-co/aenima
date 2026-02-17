import React from "react";
import styles from "./Tooltip.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Tooltip = ({ name, description, children, top, left }) => {
  return (
    <div
      className={styles.tooltipContainer}
      style={{
        top,
        left,
      }}
    >
      {children}
      <div className={styles.arrow} />

      <div className={styles.tooltip}>
        <div>
          <h4 className="font_1_s">{name}</h4>
          <h5 className="font_3_m">{description}</h5>
        </div>

        <FontAwesomeIcon
          icon={faLinkedin}
          style={{ color: "#5C5D68", fontSize: "1.2rem" }}
        />
      </div>
    </div>
  );
};

export default Tooltip;
