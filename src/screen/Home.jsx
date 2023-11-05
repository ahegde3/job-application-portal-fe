import React from "react";
import Navbar from "../component/Navbar";
import SearchBox from "../component/SearchBox";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ top: "50px", margin: "41px", position: "relative" }}>
        <SearchBox />
      </div>
    </div>
  );
}
