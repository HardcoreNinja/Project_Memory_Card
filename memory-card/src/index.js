import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './components/Nav';

const content = ReactDOM.createRoot(document.getElementById('content'));
content.render(
  <React.StrictMode>
    <Nav />
  </React.StrictMode>
);
