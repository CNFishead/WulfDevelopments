import React from "react";
import { Link } from "react-router-dom";
import Card from "../StyledComponents/Card";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./ProjectCard.css";

const ProjectCard = (props) => {
  const {
    project_name,
    project_image,
    project_URL,
    languages,
    description,
    technology,
  } = props.data;

  return (
    <div className="container-fluid card projectCard">
      <h3>{project_name}</h3>
      <img className="projectImages" src={project_image} alt={project_name} />
      <div className="text">
        <p>{languages}</p>
        <p>{description}</p>
        <p>{technology}</p>
        <a className="projectLink" href={project_URL}>
          See the repo for: {project_name}!
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
