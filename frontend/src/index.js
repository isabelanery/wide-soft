import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import Provider from './components/context/Provider';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <React.StrictMode>
      <Provider>
        <App />
      </Provider>
    </React.StrictMode>
  </HashRouter>
);
