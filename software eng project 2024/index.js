import React from 'react';
import ReactDOM from 'react-dom/client';  // Important for React 18
import './index.css';
import App from './App'; // Main component
import reportWebVitals from './reportWebVitals'; // Optional for performance reporting

const root = ReactDOM.createRoot(document.getElementById('root'));  // For React 18

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
