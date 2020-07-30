const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

const { Client } = require("pg");

//Input Database info
const client = new Client({
  user: "kkosyrgi",
  password: "zrn-y1rBMUGZbBj9WgEbWMPjZrrhcG5a",
  host: "ruby.db.elephantsql.com",
  port: 5432,
  database: "kkosyrgi",
});

//Connect to client
client.connect();

//Localhost:5000
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

//Require .JSON files to get sample info
const candidate = JSON.stringify(
  require("./Artifacts/sample_candidate_info.json")
);
const breakout_room = JSON.stringify(
  require("./Artifacts/sample_collection_breakout_room_info.json")
);

//Post request to create a new w3Id
//3 Columns in table for candidate info, breakout room info, and w3Id
app.post("/assign", async (req, res) => {
  const { create_w3id } = req.body;
  try {
    console.log("connected successfully");
    const addValues = await client.query(
      "insert into candidate_interviews_assignments(candidate_info, breakout_room_info, create_w3id) values ($1, $2, $3)",
      [candidate, breakout_room, create_w3id]
    );
    res.send(addValues.rows);
  } catch (err) {
    console.log(err);
  }
});

//Get request for w3Id to get information for candidate info, breakout room info, and w3Id
app.get("/assign", async (req, res) => {
  try {
    console.log("Get successful");
    const addValues = await client.query(
      "SELECT * from candidate_interviews_assignments"
    );
    res.send(addValues);
  } catch (err) {
    console.log(err);
  }
});

//Put request to update candidate assignments
app.put("/assign/:id", async (req, res) => {
  try {
    console.log("Put successful");
    const values = await client.query(
      "UPDATE candidate_interviews_assignments SET create_w3id=$1 Where id=$2",
      [req.body.create_w3id, req.params.id]
    );
    res.json(values.rows);
  } catch (err) {
    console.log(err);
  }
});

//Delete candidate assignments
app.delete("/assign/:id", async (req, res) => {
  try {
    console.log("delete successful");
    const values = await client.query(
      "DELETE from candidate_interviews_assignments WHERE id = $1",
      [req.params.id]
    );
    res.json(values.rows);
  } catch (err) {
    console.log(err);
  }
});

//Get request to get candidate info
app.get("/candidateinfo", async (req, res) => {
  const { create_w3id } = req.body;
  try {
    console.log("Get successful");
    const addValues = await client.query(
      "SELECT candidate_info FROM candidate_interviews_assignments"
    );
    res.send(addValues.rows[0]);
  } catch (err) {
    console.log(err);
  }
});

//Get request to get breakout room info
app.get("/breakoutroom", async (req, res) => {
  try {
    console.log("Get successful");
    const addValues = await client.query(
      "SELECT breakout_room_info FROM candidate_interviews_assignments"
    );
    res.send(addValues.rows);
  } catch (err) {
    console.log(err);
  }
});
