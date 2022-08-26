import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router basename= {process.env.PUBLIC_URL}>
      <Routes>
        <Route
        path='*'
        element={<App />}
        strict = {false}
        />
      </Routes>
      </Router>
  </React.StrictMode>,

  document.getElementById('root')
  );