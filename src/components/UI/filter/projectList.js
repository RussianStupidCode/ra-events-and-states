import React from "react";
import Project from "./project";

const ProjectList = ({ projects }) => {
  console.log(projects);
  return (
    <div className="d-flex flex-row flex-wrap justify-content-center">
      {projects.map((project) => (
        <Project key={project.img} src={project.img} />
      ))}
    </div>
  );
};

export default ProjectList;
