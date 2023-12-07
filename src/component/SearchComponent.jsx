import React, { useState } from "react";
import SearchBox from "../component/SearchBox";
import JobList from "../component/JobList";

export default function SearchComponent() {
  const [isSearched, setIsSearched] = useState(false);
  const [jobList, setJobList] = useState([]);
  return (
    <div style={{ top: "50px", margin: "41px", position: "relative" }}>
      <h4>Search for the job</h4>
      <SearchBox setIsSearched={setIsSearched} setJobList={setJobList} />
      {console.log(jobList?.length)}
      {isSearched &&
        (jobList?.length > 0 ? (
          <JobList jobs={jobList} />
        ) : (
          <div>
            <h3>No Jobs found</h3>
          </div>
        ))}
    </div>
  );
}
