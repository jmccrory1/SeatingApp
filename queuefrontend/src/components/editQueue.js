import React, { Fragment, useEffect, useState } from "react";

//import CandidatStatus
import CandidateStatus from "./candidateStatus";

//queue empty array useState
const EditQueue = () => {
  const [queue1, setQueue] = useState([]);

//delete candidate from table with delete request
  const deleteCandidate = async (id) => {
    try {
      await fetch(`http://localhost:5000/assign/${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error(error.message);
    }
  };

  //useEffect getQueue to get updated queue values after making changes
  useEffect(() => {
    async function getQueue() {
      try {
        const response = await fetch("http://localhost:5000/assign");
        const responseBody = await response.json();
        setQueue(responseBody);
      } catch (error) {
        console.error(error.message);
      }
    }
    getQueue();
  }, []);

  return (
  // Set table header valus and show number of candidates in selected breakout room
    <Fragment>
      <div className="container mt-5" />
      <h5>Number of Candidates in Breakout Room: {queue1.length}</h5>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">JRSS</th>
            <th scope="col">Status</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
      
        <tbody>
 {/* check if queue1 is null and map event changes to table          */}

          {queue1 !== 'undefined' && queue1.length > 0 && queue1.map(e => (
            <tr key={e.id}>
           <th>{e.id}</th>
              <td>{e.candidate.name}</td>
              <td>{e.candidate.jrss}</td>
              <td>
                <CandidateStatus e={e} />
              </td> 
              <td>
                
{/* button to delete candidate  */}
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
