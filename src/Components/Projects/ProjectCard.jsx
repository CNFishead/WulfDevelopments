import React from "react";
import { Link } from "react-router-dom";
import Card from "../StyledComponents/Card";

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
    <Card className="container-fluid">
      <h3>{project_name}</h3>
      <img className="projectImages" src={project_image} alt={project_name} />
      <div className="container-fluid text">
        <p>{languages}</p>
        <p>{description}</p>
        <p>{technology}</p>
      </div>
      <a className="Images" href={project_URL}>
        See the repo for: {project_name}!
      </a>
    </Card>
  );
};

export default ProjectCard;