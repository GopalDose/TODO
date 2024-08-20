import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import InputForm from './components/InputForm/InputForm';
import { TaskField } from './components/TaskField/TaskField';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/list');
        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className='container'>
      <Navbar />
      <InputForm />
      <div className="Tasks-display">
        {tasks.map((task, index) => (
          <TaskField key={index} task={task.task} status={task.status} />
        ))}
      </div>
    </div>
  );
}

export default App;
