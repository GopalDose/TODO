import React, { useState } from 'react';
import './InputForm.css';

const InputForm = () => {
  const [task, setTask] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task }),
      });

      if (response.ok) {
        console.log('Task added successfully!');
      } else {
        console.log('Failed to add task.');
      }
    } catch (error) {
      console.error('Error:', error);
      console.log('Error occurred while adding task.');
    }
  };

  return (
    <>
      <form className='inputForm' onSubmit={handleSubmit}>
        <input
          type="text"
          name='task'
          onChange={(e) => setTask(e.target.value)}
          placeholder='Enter Task'
          value={task}
        />
        <button type='submit'>ADD</button>
      </form>
      <div className="display">
        Content: <span>{task}</span>
      </div>
    </>
  );
};

export default InputForm;
