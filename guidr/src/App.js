import React from 'react';
// import { Route } from 'react-router-dom'

import './App.scss';
import LoginRoute from './components/login/LoginRoute'
import AppData from './components/appdata/AppData';

function App() {
  return (
    <div className="App">
        <div className='header'>
          <h1>GUIDR</h1>
          <h2>Own the Outdoors</h2>
        </div>
      <AppData />
      <LoginRoute />
    </div>
  );
}

export default App;
