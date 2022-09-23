import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// runs the app by calling our App component from App.js (where the bulk of the code is)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
