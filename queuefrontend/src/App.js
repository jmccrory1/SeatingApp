import React, { Fragment } from 'react';
import './App.css';

import webexLogo from './webex.png';
import AddCandidate from "./components/addCandidate";
import EditQueue from "./components/editQueue";

function App() {
  return (
    <Fragment>
      <div className="container text-center">
        <img src={webexLogo} width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy"></img>
       <h1>  Queue Manager</h1>
      <div className="container">
        <AddCandidate />
      </div>
      <div className="container">
        <EditQueue />
      </div>
      </div>
    </Fragment>
  );
}

export default App;