import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.min.css'; // ready css classes
import App from './components/app/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
