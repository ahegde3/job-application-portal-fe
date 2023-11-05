import React, { useState } from "react";
import Navbar from "../component/Navbar";
import SearchBox from "../component/SearchBox";
import JobList from "../component/JobList";

export default function Home() {
  const [isSearched, setIsSearched] = useState(false);
  const [jobList, setJobList] = useState([]);
  return (
    <div>
      <Navbar />
      <div style={{ top: "50px", margin: "41px", position: "relative" }}>
        <SearchBox setIsSearched={setIsSearched} />
        {console.log(jobList?.length)}
        {isSearched ? <JobList JobList /> : null}
      </div>
    </div>
  );
}
