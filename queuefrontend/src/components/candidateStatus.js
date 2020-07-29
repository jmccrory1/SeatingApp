import React, { Fragment, useState } from 'react';

const CandidateStatus = ({ e }) => {
    const [ status ] = useState(e.interview_status_code);
    const assignmentStatus = async(str) => {
        const interview_status_code = str;

        try {
            const code = { interview_status_code};
            await fetch(`http://localhost:5000/assign/:id`, {
                method: "PUT",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(code)
            });
        } catch (error) {
            console.error(error.message);
        }
    }

    return (
        <Fragment>
            <div className="dropdown" id={`status${e.id}`}>
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" value={status}>
                    {`${e.interview_status_code}`}  
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" id={`status${e.id}`}>
                    <button className="dropdown-item" type="button" onClick={assignmentStatus("P")}>Pending</button>
                    <button className="dropdown-item" type="button" onClick={assignmentStatus("I")}>Incomplete</button>
                    <button className="dropdown-item" type="button" onClick={assignmentStatus("C")}>Complete</button>
                    <button className="dropdown-item" type="button" onClick={assignmentStatus("D")}>Deferred</button>
                    <button className="dropdown-item" type="button" onClick={ assignmentStatus("R")}>Reassigned</button>
                </div>
            </div>
        </Fragment>
    );
};

export default CandidateStatus;