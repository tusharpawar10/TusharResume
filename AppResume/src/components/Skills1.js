import React from "react";
import { skillsData1 } from "../ResumeData";
import Title from "./Shared/Title";

const Skills1 = () => {
  return (
    <section className="skills section" id="skills">
      <Title title={skillsData1.title}></Title>
      <div className="skills__content bd-grid">
        {skillsData1.skills.map((skill, i) => (
          <ul className="skills__data" key={i}>
            {skill.map((subSkill, k) => (
              <li className="skills__name" key={k}>
                <span className="skills__circle"> </span>
                {subSkill}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
};

export default Skills1;