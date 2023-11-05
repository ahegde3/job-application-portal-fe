import React from "react";
import Job from "./Job";

export default function JobList({ jobs }) {
  return (
    <div className="joblist">
      {!jobs?.length ? (
        <h3>No matching beers found!</h3>
      ) : (
        jobs.map((job) => <Job key={job.name} {...job} />)
      )}
    </div>
  );
}
