import React from 'react'
import './TaskField.css'

export const TaskField = ({task, status}) => {
    return (
        <div className="task">
            <div className={status == "not" ? "icon red": "icon green" } >
            {status == "not" ? <i className='bx bxs-checkbox' ></i> : <i className='bx bxs-checkbox-checked' ></i> }
            </div>
            <div className="title">
                {task}
            </div>
            <div className="delete">
                <i className='bx bxs-trash-alt' ></i>
            </div>
        </div>
    )
}
