import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Feature from './components/Feature/Feature';
import Contact from './components/Contact/Contact';
import NoMatch from './components/NoMatch/NoMatch';

function App() {
  return (
    <div className="main-container">
      <Router>
        <Header />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/features">
            <Feature />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/country/:countryName">
            <CountryDetails />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;