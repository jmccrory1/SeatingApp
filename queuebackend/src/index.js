const express = require("express");
const app = express();
app.use(express.json());

// Define client
const { Client } = require("pg");

const client = new Client({
  user: "kkosyrgi",
  password: "zrn-y1rBMUGZbBj9WgEbWMPjZrrhcG5a",
  host: "ruby.db.elephantsql.com",
  port: 5432,
  database: "kkosyrgi",
});

client.connect();

const port = process.env.PORT || 5000;
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

const candidate = JSON.stringify(
  require("../Artifacts/sample_candidate_info.json")
);
const breakout_room = JSON.stringify(
  require("../Artifacts/sample_collection_breakout_room_info.json")
);

app.post("/assign", async (req, res) => {
  const { create_w3id } = req.body;

  try {
    console.log("connected successfully");
    const addValues = await client.query(
      "insert into candidate_interviews_assignments(candidate_info, breakout_room_info, create_w3id) values ($1, $2, $3)",
      [candidate, breakout_room, create_w3id]
    );
    res.send(addValues.rows[0]);
  } catch (err) {
    console.log(err);
  }
});

app.get("/assign", async (req, res) => {
  const { create_w3id } = req.body;

  try {
    console.log("Get successful");
    const addValues = await client.query(
      "insert into candidate_interviews_assignments(candidate_info, breakout_room_info, create_w3id) values ($1, $2, $3)",
      [candidate, breakout_room, create_w3id]
    );
    res.send(addValues.rows[0]);
  } catch (err) {
    console.log(err);
  }
});

app.put("/assign", async (req, res) => {
  try {
    console.log("Put successful");
    const values = await client.query(
      "Update candidate_interviews_assignments SET"
    );
    res.json(values.rows);
  } catch (err) {
    console.log(err);
  }
});

app.delete("/assign", async (req, res) => {
  try {
    console.log("delete successful");
    const values = await client.query(
      "delete candidate_interviews_assignments Where name = $1",
      [req.params.id]
    );

    res.json(values.rows);
  } catch (err) {
    console.log(err);
  }
});
