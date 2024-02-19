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
}
