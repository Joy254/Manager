import React from 'react';

const Task = ({ task }) => (
  <div>
    <h2>{task.title}</h2>
    <p>Description: {task.description}</p>
    <p>Due Date: {task.due_date}</p>
    <p>Priority: {task.priority}</p>
    <p>Status: {task.status}</p>
  </div>
);

export default Task;