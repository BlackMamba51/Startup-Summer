import React from "react";
import InitialState from '../InitialState/InitialState';
import SearchResults from "../SearchResults/SearchResults";

function MainScreen({ isFind, totalPages, currentRepos, changePage, firstRepo }) {


  return (
    <div>
      {isFind
      ? <SearchResults firstRepo={firstRepo} changePage={changePage} currentRepos={currentRepos} totalPages={totalPages}/>
      : <InitialState/>
      }
    </div>
  )
}
export default MainScreen;