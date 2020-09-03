import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
// import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Button><FontAwesomeIcon icon={faCoffee} />Button</Button>
      {/* <Button color="primary">Hello World</Button> material button and bootstrap button make jamela */}

    </div>
  );
}

export default App;