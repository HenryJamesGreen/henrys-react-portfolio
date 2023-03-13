import { useParams } from 'react-router-dom';
import projectData from '../projects.json';

function ProjectDetails() {
  let { id } = useParams();
  let project = projectData.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <a href={project.deployed}>View deployed app</a>
      <a href={project.repo}>View repo on GitHub</a>
    </div>
  );
}

export default ProjectDetails;
