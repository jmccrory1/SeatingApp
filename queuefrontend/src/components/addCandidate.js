import React, { Fragment } from "react";
import axios from 'axios';

//Require candidate_info artifact
const candidate_info = JSON.stringify(
  require("../Artifacts/sample_candidate_info.json")
);

//Require breakout_room_info artifact
const breakout_room_info = JSON.stringify(
  require("../Artifacts/sample_collection_breakout_room_info.json")
);

//Parse candidate_info and breakout_room_info
const candidate = {
	"name": "Jordan Myles",
	"jrss": "Java Full Stack",
	"tags": [
		"Oracle",
		"Node",
		"Sprint Boot"
	],
	"notes": "5 years of experience",
	"links": [{
			"name": "Github",
			"url": "github.com/jomyles"
		},
		{
			"name": "Resume",
			"url": "https://ibm.box.com/s/1jordeuafclarcx38myv0ken3jiry"
		}
	]
}
const breakout_room = [
  {
    name: "Breakout Room 1 - Java/Cloud",
    teams: [
      {
        name: "Java",
        interviewers: [
          {
            w3id: "jamie.scott.richardson@ibm.com",
            name: "Jamie Richardson",
          },
          {
            w3id: "jeffreys@us.ibm.com",
            name: "Jeffery Smith",
          },
        ],
      },
      {
        name: "Cloud",
        interviewers: [
          {
            w3id: "jeffreys@us.ibm.com",
            name: "Jeffery Smith",
          },
          {
            w3id: "sgrayso@us.ibm.com",
            name: "Sonyetta Anderson",
          },
        ],
      },
    ],
  },
  {
    name: "Breakout Room 2 - Microsoft/Workday",
  },
  {
    name: "Breakout Room 3 - Oracle/SAP",
  },
  {
    name: "Breakout Room 4 - .NET/Cloud",
  },
  {
    name: "Breakout Room 5 - Agile/Project Management",
  },
  {
    name: "Breakout Room 6 - UI Development/React/Angular",
  },
  {
    name: "Breakout Room 7 - Business/System Analysis",
  },
];

//Create AddCandidate function and assign create_w3id test value

const AddCandidate = () => {
const [breakout, setBreakout] = React.useState({})
  const create_w3id = "testing@ibm.com";

//Click event response
  const handleClick = () => {
    
//When fetching, grab information for create_w3id, candidate, and breakout_room
    
      const body = {
        candidate: candidate,
        breakout_room: breakout_room[0],
        create_w3id
      }
      
//POST fetch request to get, update, and order data

       axios.post("http://localhost:5000/assign", body) 
        .then((resp) => {console.log(resp)})
        .catch((error) => {console.log(error)})
    }


  return (
    <Fragment>
      {/* create card for next candidate to be placed */}
      <div className="container">
        <div className="card">
          <div className="card-header">Next To Be Placed:</div>
          <div className="card-body">
            <h5 className="card-title">{candidate.name}</h5>
            <p className="card-text">{candidate.jrss}</p>

            <div className="container">
              <div className="btn-group dropright">
                <button
                  type="button"
                  className="btn btn-secondary dropdown-toggle"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Select Breakout Room
                </button>
                {/* Map breakoutroom choices to the table */}
                <div className="dropdown-menu">
                  {breakout_room.map((e) => (
                    <button
                      className="dropdown-item"
                      type="button"
                      key={e.name} 
                    >
                      {e.name}
                    </button>
                  ))}
                </div>
              </div>
              {/* add button for breakoutroom choice, which implements handleClick event */}
              <div className="container">
                <div className="vertical-center">
                  <form className="d-flex mt-3">
                    <button type="button" className="btn btn-primary" onClick={handleClick}>
                      Add
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default AddCandidate;
