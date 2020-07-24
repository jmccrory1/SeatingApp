import axios from "axios";
import "./index.css";
import express from "express";
import React, { useState, useEffect } from "react";

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

const candidateInfo = JSON.stringify(
  require("./Artifacts/sample_candidate_info.json")
);
const breakout_room = JSON.stringify(
  require("./Artifacts/sample_collection_breakout_room_info.json")
);

app.use(cors());
app.use(express.json());

const uri = 'http://localhost:5000/assign';

  app.get(function (req, res) {
    const options = {
        url: uri,
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8'
        }
    };

    request(options, function(error, response, body) {
        let json = JSON.parse(body);

        let candidate = [];
        for(let name of json.candidateInfo){
          let object = new candidateInfo(
            candidateInfo.name, candidateInfo.tags, candidateInfo.jrss
          )
          candidate.push(object);
        }

  <div>
  {client.map((item, index) => {
    return(
    <div class="card" style="width: 18rem;">
      <div class="card-header">Add Candidate to queue- Breakout room 1- Java</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item" key={index}>{name.candidate.client}</li>
        <li class="list-group-item" key={index}>{tags.candidate.client}</li>
        <li class="list-group-item"key={index}>{name.breakout_room.client}</li>
      </ul>
    </div>

<div class="card" style="width: 18rem;">
  <div class="card-header">Edit Queue- Breakout room 1- Java</div>
    <ul class="list-group list-group-flush">
     <li class="list-group-item" key={index}>{name.candidate.client}<button type="button" class="btn btn-outline-primary">X</button></li>
    </ul>
</div>

<div class="card" style="width: 18rem;">
      <div class="card-header">Queue options- Breakout room 1- Java</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Add Candidate to queue: </li>
        <li class="list-group-item" key={index}>{name.candidate.client}</li>
        <li class="list-group-item">Edit Queue: </li>
        <li class="list-group-item" key={index}>Number of Candidates: {arrays.length(candidate.client)}</li>
        <li class="list-group-item" key={index}>Number of Resources: {arrays.length(breakout_room.client)}</li>
      </ul>
    </div>
    );
  })}
</div>;
}

export default App;
