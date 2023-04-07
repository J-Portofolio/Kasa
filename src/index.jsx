import React from 'react';
import ReactDOM from 'react-dom/client';

// Routes
import Routing from './routes/Routing';

// Style
import './styles/helpers.scss';
import './styles/base.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Routing />
  </React.StrictMode>
);
