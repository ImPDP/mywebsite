import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Home from './Components/Home';
import ProjectMobile from './Components/Projects/ProjectsMobile';

function App() {
  return (
      <Router >
        <div>
        <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/projects' component={ProjectMobile} />
        </Switch>
        </div>
      </Router>
  );
}

export default App;
