import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Keep this
import App from './App';
// Remove: import './App.css';  ← DELETE THIS LINE if present

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);