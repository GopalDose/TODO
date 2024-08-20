import React from 'react'
import Navbar from './components/Navbar/Navbar'
import InputForm from './components/InputForm/InputForm'
import { TaskField } from './components/TaskField/TaskField'

const App = () => {
  return (
    <div className='container'>
      <Navbar/>
      <InputForm/>
      <div className="Tasks-display">
        <TaskField task="task" status="done"/>
      </div>
    </div>
  )
}

export default App