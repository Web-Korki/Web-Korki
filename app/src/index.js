import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import rootReducer from './redux/reducers/index';

const store = createStore(
  rootReducer,
  window._REDUX_DEVTOOLS_EXTENSION_&&window._REDUX_DEVTOOLS_EXTENSION_()
  );

ReactDOM.render(
  <React.StrictMode>
    
        <App />
      
  </React.StrictMode>,
  document.getElementById('root')
);
