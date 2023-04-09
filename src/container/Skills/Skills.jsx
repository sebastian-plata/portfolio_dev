import React from "react";
import { Subtitle } from "../../components";
import { frontend, backend } from "../../constants/data";

import "./Skills.css";

const Skills = () => (
  <div
    id="skills"
    className="app__skills"
    style={{ backgroundColor: "#f1f1e8" }}
  >
    <Subtitle title="skills? I've got some" />
    <div className="app__skills-container">
      <div className="app__skills-container_top">
        {frontend.map((skill) => (
          <img src={skill.src} key={skill.title} alt={skill.title} />
        ))}
      </div>
      <div className="app__skills-container_bottom">
        {backend.map((skill) => (
          <img src={skill.src} key={skill.title} alt={skill.title} />
        ))}
      </div>
    </div>
  </div>
);

export default Skills;
