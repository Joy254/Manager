import React, { useState, useEffect } from 'react';
import './App.css';
import User from './components/User';
import Task from './components/Task';
import Project from './components/Project';
import Category from './components/Category';
import Reminder from './components/Reminder';
import Comment from './components/Comment';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import TaskList from './components/TaskList';
import ProjectList from './components/ProjectList';
import CategoryList from './components/CategoryList';
import ReminderList from './components/ReminderList';
import CommentList from './components/CommentList';

const App = () => {
  const [currentUser, setCurrentUser] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [reminders, setReminders] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Tasks
        const tasksResponse = await fetch('https://taskify-8h37.onrender.com/tasks');
        const tasksData = await tasksResponse.json();
        setTasks(tasksData);

        // Fetch Projects
        const projectsResponse = await fetch('https://taskify-8h37.onrender.com/projects');
        const projectsData = await projectsResponse.json();
        setProjects(projectsData);

        // Fetch Categories
        const categoriesResponse = await fetch('https://taskify-8h37.onrender.com/categories');
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);

        // Fetch Reminders
        const remindersResponse = await fetch('https://taskify-8h37.onrender.com/reminders');
        const remindersData = await remindersResponse.json();
        setReminders(remindersData);

        // Fetch Comments
        const commentsResponse = await fetch('https://taskify-8h37.onrender.com/comments');
        const commentsData = await commentsResponse.json();
        setComments(commentsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleRegister = async (username, email, password) => {
    try {
      const response = await fetch('https://taskify-8h37.onrender.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await response.json();
      setCurrentUser(data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  const handleLogin = async (username, password) => {
    try {
      const response = await fetch('https://taskify-8h37.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      setCurrentUser(data);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div>
      <h1>Task Management Application</h1>

      {!currentUser && <RegistrationForm handleRegister={handleRegister} />}
      {!currentUser && <LoginForm handleLogin={handleLogin} />}

      {currentUser && (
        <div>
          <h2>Welcome, {currentUser.username}!</h2>

          <User user={currentUser} />

          <TaskList tasks={tasks} />
          <ProjectList projects={projects} />
          <CategoryList categories={categories} />
          <ReminderList reminders={reminders} />
          <CommentList comments={comments} />
        </div>
      )}
    </div>
  );
};

export default App;

