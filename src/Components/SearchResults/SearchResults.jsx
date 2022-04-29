import React from "react";
import './searchresults.css';
import SearchInfo from "./SearchInfo";
import SearchRepos from "./SearchRepos";
function SearchResults() {

  return (
    <div className="user-section">
      <div className="container">
        <div className="user-section__body">
          <SearchInfo/>
          <SearchRepos/>
        </div>
      </div>
    </div>
  )
}
export default SearchResults;