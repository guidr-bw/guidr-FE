import React from 'react';
import { Route } from 'react-router-dom'

import './App.css';
import LoginForm from './components/LoginForm';
import CreateForm from './components/CreateForm';

function App() {
  return (
    <div className="App">
      <h1>guidr</h1>
      <Route exact path='/' component={LoginForm} />
      <Route path='/create-account' component={CreateForm} />
    </div>
  );
}

export default App;
