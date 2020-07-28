import React, { Fragment } from "react";

const candidate_info = JSON.stringify(
  require("../Artifacts/sample_candidate_info.json")
);

const breakout_room_info = JSON.stringify(
  require("../Artifacts/sample_collection_breakout_room_info.json")
);

const candidate = JSON.parse(candidate_info);
const breakout_room = JSON.parse(breakout_room_info);

const AddCandidate = () => {
  const create_w3id = "john.smith@ibm.com";
  const interview_status_code = "P";

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = {
        create_w3id,
        interview_status_code,
        candidate_info,
        breakout_room_info,
      };

      await fetch("http://localhost:5000/assign", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className="container text-center">
        <div className="btn-group dropright">
        <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Select Breakout Room
        </button>
        <div className="dropdown-menu">
            {breakout_room.map((e) => (
              <button className="dropdown-item" type="button" key={e}>
                {e.name}
              </button>
            ))}
             <form className="d-flex mt-3" onSubmit={onSubmitForm}></form>
          </div>
          </div>
          </div>
        <p>
          {candidate.name}, {candidate.jrss}
        </p>
    
    </Fragment>

  );
};

export default AddCandidate;
