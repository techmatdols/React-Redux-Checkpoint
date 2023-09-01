import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleTask } from '../TaskActions/TaskActions';

const Task = ({task}) => {
    const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTask(Task.id));
  };
  return (
    <div>
         <li>
      <input
        type="checkbox"
        checked={Task.isDone}
        onChange={handleToggle}
      />
      {task.description}
    </li>
    </div>
  )
}

export default Task