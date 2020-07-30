import React, { Fragment, useEffect, useState } from "react";
import CandidateStatus from "./candidateStatus";

const candidate_info = JSON.stringify(
  require("../Artifacts/sample_candidate_info.json")
);

const candidate = JSON.parse(candidate_info);

const EditQueue = () => {
  const [queue, setQueue] = useState([]);

  const deleteCandidate = async (id) => {
    try {
      await fetch("http://localhost:5000/assign/:id", {
        method: "DELETE",
      });

    } catch (error) {
      console.error(error.message);
    }
  };

  const getQueue = async () => {
    try {
      const response = await fetch("http://localhost:5000/assign");
      const responseBody = await response.json();
      setQueue(responseBody);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getQueue();
  }, []);

  return (
    <Fragment>
      <div className="container mt-5" />
      {/* <h4>BR 1</h4> */}
      <h5>Number of Candidates in Breakout Room: {queue.length}</h5>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scopr="col">JRSS</th>
            <th scope="col">Status</th>
            <th scopr="col">Delete</th>
          </tr>
        </thead>

        <tbody>
          {/* {candidate.map((candidate) => ( */}
            <tr key={candidate}>
              <td>{candidate.name}</td>
              <td>{candidate.jrss}</td>
              <td>
                <CandidateStatus />
              </td>
              <td>
                <button
                  className="btn btn-danger btn-block"
                  onClick={() => deleteCandidate(candidate.name)}
                >
                  X
                </button>
              </td>
            </tr>
          {/* ))} */}
        </tbody>
      </table>
    </Fragment>
  );
};

export default EditQueue;
