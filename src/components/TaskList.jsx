import React from 'react';
import Task from './Task';

const TaskList = ({ tasks }) => (
  <div>
    <h2>Tasks</h2>
    {tasks.length > 0 && tasks.map(task => <Task key={task.id} task={task} />)}
  </div>
);

export default TaskList;