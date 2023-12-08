import React from "react";
import SearchBar from "material-ui-search-bar";
import { toast } from "react-toastify";
import { searchJobsByKeyword } from "../api/jobs";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import { ImageContext } from "../contexts/ImageContext";
// import "./styles.scss";

export default function SearchBox({ setIsSearched, setJobList }) {
  // const { handleChange } = React.useContext(ImageContext);

  const candidateId = localStorage.getItem("userId");

  const searchJobs = (keyword) => {
    if (!keyword) {
      toast.error("Enter valid email id and password", {
        position: toast.POSITION.TOP_RIGHT,
      });
      return;
    }
    searchJobsByKeyword(keyword, candidateId).then((res) => setJobList(res));
  };

  return (
    <div>
      <SearchBar
        onRequestSearch={(value) => {
          setIsSearched(true);
          console.log("on press", value);
          searchJobs(value);
        }}
        placeholder="Search Job"
        autoFocus
      />
    </div>
  );
}
