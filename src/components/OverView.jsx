import React from "react";
import styles from "./OverView.module.css";
import VideoComponent from "./VideoComponent";

const OverView = () => {
  return (
    <div className={styles.overViewContainer}>
      <div className={styles.overViewText}>
        <h1 className="font_2_l">We craft unique websites</h1>
        <h2 className="font_2_s"> {">>"} creating meaningful </h2>
        <h2 className="font_2_s">& memorable experiences.</h2>
        <VideoComponent />
      </div>
    </div>
  );
};

export default OverView;
