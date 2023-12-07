import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../component/Navbar";

import SearchComponent from "../component/SearchComponent";
import JobCreationComponent from "../component/JobCreationComponent";
import { CANDIDATE } from "../constant/constants";

export default function Home() {
  const userType = localStorage.getItem("userType");
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("isLogged")) {
      navigate("/");
    }
  });
  return (
    <div>
      <Navbar />
      {userType === CANDIDATE ? <SearchComponent /> : <JobCreationComponent />}
    </div>
  );
}
