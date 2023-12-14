import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
//styles
import './variables/variables.scss';
import './styles/global-styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
