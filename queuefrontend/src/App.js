import React, { Fragment } from 'react';
import './App.css';

//import components

import AddCandidate from "./components/addCandidate";
import EditQueue from "./components/editQueue";

function App() {
  return (
    <Fragment>
      <div className="container">
      <h1 className="text-center mt-5">Webex Queue</h1>
      </div>
      <div className="container">
        <AddCandidate />
      </div>
      <div className="container">
        <EditQueue />
      </div>
    </Fragment>
  );
}

export default App;