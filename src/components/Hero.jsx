import React from "react";
import styles from "./Hero.module.css";
import ana from "../assets/ana.png";
import bruna from "../assets/bruna.png";
import rafa from "../assets/rafa.png";
import Button from "./Button";
import useMedia from "./useMedia";
import Tooltip from "./Tooltip";

const Hero = () => {
  const team = [
    {
      id: 1,
      name: "Ana Nogueira",
      role: "WEB DEVELOPER",
      image: ana,
    },
    {
      id: 2,
      name: "Bruna Heleodoro",
      role: "QA ANALYST",
      image: bruna,
    },
    {
      id: 3,
      name: "Rafael Meurer",
      role: "UI & UX DESIGNER",
      image: rafa,
    },
  ];

  const mobile = useMedia("(max-width: 54rem)");
  const [tooltip, setTooltip] = React.useState(null);

  function showTooltip(event, member) {
    const rect = event.currentTarget.getBoundingClientRect();

    setTooltip({
      ...member,
      top: rect.height,
      left: rect.left + rect.width / 2,
    });
  }

  function hideTooltip() {
    setTooltip(null);
  }

  function toggleTooltip(event, member) {
    const rect = event.currentTarget.getBoundingClientRect();

    setTooltip((prev) =>
      prev?.id === member.id
        ? null
        : {
            ...member,
            top: rect.height,
            left: rect.left + rect.width / 2,
          },
    );
  }
  return (
    <div className={`${styles.heroBg}`}>
      <ul className={styles.teamWrapper}>
        {team.map((member) => (
          <li
            key={member.id}
            className={styles.team}
            onMouseEnter={(e) => showTooltip(e, member)}
            onMouseLeave={hideTooltip}
            onClick={(e) => toggleTooltip(e, member)}
          >
            <img src={member.image} alt={member.name} />
          </li>
        ))}

        {tooltip && (
          <Tooltip
            name={tooltip.name}
            description={tooltip.role}
            top={tooltip.top}
            left={tooltip.left}
          />
        )}
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
