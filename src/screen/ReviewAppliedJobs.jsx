import React, { useEffect, useState } from "react";
import JobList from "../component/JobList";
import Job from "../component/Job";
import { getAppliedJobsForCandidate } from "../api/jobs";
import Navbar from "../component/Navbar";

export default function ReviewAppliedJobs() {
  const [appliedJobs, setAppliedJobs] = useState([]);


  useEffect(() => {
    const candidateId = localStorage.getItem("userId");

    getAppliedJobsForCandidate(candidateId).then((res) => setAppliedJobs(res));
  }, []);

  return (
    <div>
      <Navbar />
      <h2>Applied Jobs</h2>
      {appliedJobs?.length > 0
        ? appliedJobs.map((job) => (
            <Job key={job.title} applied={true} job={job} unClickable={true} />
          ))
        : null}
    </div>
  );
}
