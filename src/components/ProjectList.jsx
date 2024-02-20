import React from 'react';
import Project from './Project';

const ProjectList = ({ projects }) => (
  <div>
    <h2>Projects</h2>
    {projects.length > 0 && projects.map(project => <Project key={project.id} project={project} />)}
  </div>
);

export default ProjectList;