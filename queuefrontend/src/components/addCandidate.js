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
  const create_w3id = "julia.mccrory@ibm.com";

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const body = {
        create_w3id,
        candidate_info,
        breakout_room_info,
      };

      await fetch("http://localhost:5000/assign", {
        method: "GET",
        // headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
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
                <div className="dropdown-menu">
                  {breakout_room.map((e) => (
                    <button
                      className="dropdown-item"
                      type="button"
                      key={e}
                    >
                      {e.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="container">
              <div className="vertical-center">
              <form className="d-flex mt-3" onSubmit={handleClick}>
                <button type="button mt-5" className="btn btn-primary">
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
