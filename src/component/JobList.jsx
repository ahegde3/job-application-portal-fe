import React from "react";
import Job from "./Job";

export default function JobList({ jobs, setOpenJobDetails }) {
  return (
    <div className="joblist" style={{ margin: "40px" }}>
      {!jobs?.length ? (
        <h3>No Jobs found!</h3>
      ) : (
        jobs.map((job) => (
          <Job
            key={job.title}
            job={job}
            setOpenJobDetails={setOpenJobDetails}
          />
        ))
      )}
    </div>
  );
}
