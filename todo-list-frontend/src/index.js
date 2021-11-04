import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { IdProvider } from './providers/listProvider';

ReactDOM.render(
  <React.StrictMode>
    <IdProvider>
      <App />
    </IdProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
