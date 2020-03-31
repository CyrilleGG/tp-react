import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css'

import Header from './components/Header';

import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/work' component={Work} />
      </Switch>
    </div>
  );
}

export default App;
