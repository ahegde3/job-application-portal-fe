import React, { useState } from "react";
import Navbar from "../component/Navbar";
import SearchBox from "../component/SearchBox";
import JobList from "../component/JobList";

export default function Home() {
  const [isSearched, setIsSearched] = useState(false);
  const [jobList, setJobList] = useState([
    {
      name: "2024 Lazard Software Engineer Summer Internship",
      companyName: "Microsoft",
      location: "Boston",
      description:
        "The Software Engineer Summer Intern at Lazard will work within the Data Analytics Group. The primary responsibility is designing, building, testing, and maintaining large-scale data-intensive applications and data products. The Software Engineer Summer Intern will have the opportunity to work closely with software engineers, data scientists, investment bankers and senior management across the Firm. We’re all-in on the cloud and are a leader in the adoption of open source, RESTful APIs, microservices, and containers.",
    },
    { name: "Test2", companyName: "Apple", location: "NYC" },
  ]);
  return (
    <div>
      <Navbar />
      <div style={{ top: "50px", margin: "41px", position: "relative" }}>
        <SearchBox setIsSearched={setIsSearched} />
        {console.log(jobList?.length)}
        {isSearched ? <JobList jobs={jobList} /> : null}
      </div>
    </div>
  );
}
