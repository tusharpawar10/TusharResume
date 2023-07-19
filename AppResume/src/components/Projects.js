import React from "react";
import { projectData } from "../ResumeData";
import Title from "./Shared/Title";
const projects = () => {
  return (
    <section className="Project section" id="certificates">
      <Title title={projectData.title}></Title>
      <div className="Project__container bd-grid">
        {projectData.Project.map((projects, i) => (
          <div className="project__content" key={i}>
            <h3 className="Projects__title">{projects.title}</h3>
            <p className="Projects__describe">{projects.describe}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default projects;
