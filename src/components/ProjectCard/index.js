import React from "react";
import "./style.css";

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Link:</strong> {props.deployed}
          </li>
          <li>
            <strong>Repo Link:</strong> {props.repo}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProjectCard;
