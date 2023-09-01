
export const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: task,
  });
  
  export const toggleTask = (id) => ({
    type: 'TOGGLE_TASK',
    payload: id,
  });
  
  export const filterTasks = (filter) => ({
    type: 'FILTER_TASKS',
    payload: filter,
  });
  