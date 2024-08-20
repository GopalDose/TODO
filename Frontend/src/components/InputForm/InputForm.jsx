import React, { useState } from 'react'
import './InputForm.css'

const InputForm = () => {

  const [task, setTask] = useState();

  return (
    <form className='inputForm'>
        <input type="text" name='task' onChange={(e)=> {
          setTask(e.target.value)
          console.log(task)
        }} placeholder='Enter Task'/>
        <button type='submit'> ADD </button>
    </form>
  )
}

export default InputForm