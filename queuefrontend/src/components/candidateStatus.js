import React, { Fragment, useState } from "react";

const candidate_info = JSON.stringify(
    require("../Artifacts/sample_candidate_info.json")
  );
  
  const candidate = JSON.parse(candidate_info);

  const interview_status_code = "";

  const CandidateStatus = () => {

  const [status] = useState(interview_status_code);
  const assignmentStatus = async (el, str) => {
    try {
      const body = { interview_status_code };
      await fetch(`http://localhost:5000/assign/:id`, {
        method: "PUT",
        // headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <div className="dropdown" id={candidate.w3id}>
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          value={status}
        >
          {'Select'}
        </button>
        <div
          className="dropdown-menu"
          aria-labelledby="dropdownMenuButton"
          id={candidate.w3id}
        >
          <button
            className="dropdown-item"
            type="button"
            onClick={el => assignmentStatus(el, "P")}
          >
            Pending
          </button>

          <button
            className="dropdown-item"
            type="button"
            onClick={el => assignmentStatus(el, "I")}
          >
            Incomplete
          </button>

          <button
            className="dropdown-item"
            type="button"
            onClick={el => assignmentStatus(el, "C")}
          >
            Complete
          </button>

          <button
            className="dropdown-item"
            type="button"
            onClick={el => assignmentStatus(el, "D")}
          >
            Deferred
          </button>

          <button
            className="dropdown-item"
            type="button"
            onClick={el => assignmentStatus(el, "R")}
          >
            Reassigned
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default CandidateStatus;
