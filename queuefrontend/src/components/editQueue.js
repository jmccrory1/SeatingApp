import React, { Fragment, useEffect, useState } from "react";
import CandidateStatus from "./candidateStatus";

const breakout_room_info = JSON.stringify(
  require("../Artifacts/sample_collection_breakout_room_info.json")
);

const EditQueue = () => {
  const [queue, setQueue] = useState([]);
  const deleteCandidate = async (id) => {
    try {
      await fetch(`http://localhost:5000/assign/:id`, {
        method: "DELETE",
      });

      setQueue(queue.filter((e) => e.id !== id));
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
      <h4>{breakout_room_info.name}</h4>
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
          {queue.map((e) => (
            <tr key={e.id}>
              <th>{e.id}</th>
              <td>{e.candidate_info.name}</td>
              <td>{e.candidate_info.jrss}</td>
              <td>
                <CandidateStatus e={e} />
              </td>
              <td>
                <button
                  className="btn btn-danger btn-block"
                  onClick={() => deleteCandidate(e.id)}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default EditQueue;
