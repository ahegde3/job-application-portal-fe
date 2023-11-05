import React from "react";
import SearchBar from "material-ui-search-bar";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import { ImageContext } from "../contexts/ImageContext";
// import "./styles.scss";

export default function SearchBox({ setIsSearched }) {
  // const { handleChange } = React.useContext(ImageContext);

  return (
    <div>
      <SearchBar
        onRequestSearch={() => {
          setIsSearched(true);
          console.log("on press");
        }}
        placeholder="Search Job"
        autoFocus
      />
    </div>
  );
}
