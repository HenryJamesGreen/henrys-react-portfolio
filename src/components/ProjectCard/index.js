import React from "react";
import "./style.css";
import { Link } from 'react-router-dom';

function ProjectCard(props) {
  return (
    <Link to={`/details/${props.id}`}>
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
    </Link>
  );
}

export default ProjectCard;
