import React from "react";
import Job from "./Job";

export default function JobList({ jobs }) {
  console.log(jobs);
  return (
    <div className="joblist" style={{ margin: "40px" }}>
      {!jobs?.length ? (
        <h3>No matching beers found!</h3>
      ) : (
        jobs.map((job) => <Job key={job.title} {...job} />)
      )}
    </div>
  );
}
