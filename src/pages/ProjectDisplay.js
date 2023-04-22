import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} />
      <a href={project.url} target="_blank" className="btn-link">Click Here</a>
      
      <a href="https://github.com/udhayav" target="_black"><GitHubIcon /></a>
    </div>
  );
}

export default ProjectDisplay;