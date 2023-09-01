
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import taskReducer from './components/TaskReducer/TaskReducer';
import App from './App';

const store = createStore(taskReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
  </Provider>,
  </React.StrictMode>,
  
  document.getElementById('root')
);
