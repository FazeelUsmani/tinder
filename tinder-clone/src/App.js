import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards.js';
// import PricingCards from './PricingCards.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
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
            <TinderCards />

            {/* Pricing Card created for sooper-ott */}
            {/* <PricingCards /> */}


          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
