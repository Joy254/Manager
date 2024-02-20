import React from 'react';

const Project = ({ project }) => (
  <div>
    <h2>{project.name}</h2>
    <p>Description: {project.description}</p>
    <p>Start Date: {project.start_date}</p>
    <p>End Date: {project.end_date}</p>
  </div>
);

export default Project;