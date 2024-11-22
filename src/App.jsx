import React, { useState } from 'react';
import './App.css'; 
import AddTask from './AddTask.jsx';
import TaskList from './TaskList.jsx';


const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (id) => {
    const newTaskText = prompt('Введите новый текст для задачи:');
    if (newTaskText) {
      setTasks(tasks.map(task => (task.id === id ? { ...task, text: newTaskText } : task)));
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className='container'>
      <AddTask onAdd={addTask} />
      <TaskList tasks={tasks} onEdit={editTask} onDelete={deleteTask} />
    </div>
  );
};



export default App;
