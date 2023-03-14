import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './components/styled';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
);
