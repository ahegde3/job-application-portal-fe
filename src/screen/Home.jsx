import React, { useState } from "react";
import Navbar from "../component/Navbar";

import SearchComponent from "../component/SearchComponent";
import JobCreationComponent from "../component/JobCreationComponent";
import { CANDIDATE } from "../constant/constants";

export default function Home() {
  const userType = localStorage.getItem("userType");
  return (
    <div>
      <Navbar />
      {userType === CANDIDATE ? <SearchComponent /> : <JobCreationComponent />}
    </div>
  );
}
