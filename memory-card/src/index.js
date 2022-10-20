import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Global from './components/Global';


const content = ReactDOM.createRoot(document.getElementById('content'));
content.render(
  <React.StrictMode>
    <Global />
  </React.StrictMode>
);
