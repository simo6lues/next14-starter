import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DarkModeContextProvider } from './context/DarkModeContext';
import { ContextProvider } from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <ContextProvider>
        <App />
      </ContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);

