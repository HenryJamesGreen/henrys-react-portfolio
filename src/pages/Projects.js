import React from "react";
import Wrapper from "../components/Wrapper";
import ProjectCard from "../components/ProjectCard";
import Title from "../components/Title";
import projectData from "../projects.json";
import { useState } from "react";

function Projects() {
  // Here we set the state for friends and also create a function to update it.
  // Set the initial value to friendsData imported from the json file
  const [projects, setFriends] = useState(projectData);

  // Map over friends and render a FriendCard component for each friend object
  return (
    <Wrapper>
      <Title>Projects</Title>
      {projects.map((project) => (
        <ProjectCard
          id={project.id}
          key={project.id}
          name={project.name}
          image={project.image}
          deployed={project.deployed}
          repo={project.repo}
        />
      ))}
    </Wrapper>
  );
};

export default Projects;
