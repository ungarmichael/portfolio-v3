import f from "./../../../styles/fonts.module.scss";
import c from "./../../../styles/components.module.scss";
import l from "../../content/Experience/experience.module.scss";

import React from "react";
import Experience, { IExperience } from "../../content/Experience/index";

function ExperienceComponent(props) {
  const { experience } = props;
  return (
    <div className={l["Experience-Container"]}>
      <h1>
        <span className={`${f["Experience-Heading-1"]}`}>{experience.job}</span>
        &nbsp;
        <span className={`${f["Experience-Code-2"]}`}>
          @{experience.company}{" "}
        </span>
      </h1>
      <p className={`${f["Experience-Code-3"]}`}>{experience.time}</p>
      <ul className={l["Experience_detail-list"]}>
        {experience.descriptions.map((x) => {
          return (
            <div className={l["experience_detail-container"]}>
              <div className={l["list-indicator"]} />
              <li className={`${f["Experience-Text-1"]}`}>{x}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ExperienceComponent;
