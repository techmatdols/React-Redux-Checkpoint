import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../TaskActions/TaskActions';


const AddTask = () => {
    const dispatch = useDispatch();
  const [task, setTask] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() !== '') {
      dispatch(addTask({ id: Date.now(), description: task, isDone: false }));
      setTask('');
    }
  };
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
    </div>
  )
}

export default AddTask