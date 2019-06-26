import React from 'react';
// import { Route } from 'react-router-dom'

import './App.css';
import LoginRoute from './components/login/LoginRoute'
import AppData from './components/appdata/AppData';

function App() {
  return (
    <div className="App">
      <LoginRoute />
      <AppData />
    </div>
  );
}

export default App;
