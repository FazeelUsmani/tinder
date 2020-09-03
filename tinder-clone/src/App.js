import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>        
        <Switch>
          <Route path="/chat">
            <h1>I am chatpage</h1>
          </Route>
          <Route path="/">
            <h1>I am homepage</h1>
            <TinderCards />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
