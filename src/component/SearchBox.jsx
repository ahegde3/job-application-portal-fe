import React from "react";
import SearchBar from "material-ui-search-bar";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//import { ImageContext } from "../contexts/ImageContext";
// import "./styles.scss";

export default function SearchBox() {
  // const { handleChange } = React.useContext(ImageContext);

  return (
    <div>
      <SearchBar
        //   onRequestSearch={appStore.fetchBeers}
        placeholder="Search Job"
        autoFocus
      />
    </div>
  );
}
