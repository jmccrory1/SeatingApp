import axios from 'axios';
import "./index.css";
import express from "express";
import React, { useState, useEffect } from 'react';

const client = require("./database");
const cors = require("cors");
const app = express();

client.connect((err) => {
  if (err) {
    console.error("connection error", err.stack);
  } else {
    console.log("connected");
  }
});

const candidate = JSON.stringify(
  require("./Artifacts/sample_candidate_info.json")
);
const breakout_room = JSON.stringify(
  require("./Artifacts/sample_collection_breakout_room_info.json")
);

app.use(cors());
app.use(express.json());

function App() {
  const [client, setClient] = useState([]);

  function RetrieveData() {
    axios.get("http://localhost:5000/assign").then((response) => {
      setClient(response.data.articles);
    });
  }
  useEffect(() => {
    RetrieveData();
  }, []);


  console.log(breakout_room);


  return (
    <div>
      {client.map((item, index) => {
        return (
          <div id="parent">
            <div
              className="client info"key={index}>{candidate.client}
              
            </div>
            

           
          </div>
        )
      }
      )};
    </div>
  );
}

export default App;
