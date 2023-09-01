import React from 'react'
import { useSelector } from 'react-redux';
import Task from '../Task/Task';


const ListTask = () => {
    const tasks = useSelector((state) => {
        if (state.filter === 'all') return state.tasks;
        return state.tasks.filter((task) =>
          state.filter === 'done' ? task.isDone : !task.isDone
        );
      });
  return (
    <div>
        <ul>
        {tasks.map((task) => (
          // <Task key={task.id} task={task} />
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  )
}

export default ListTask