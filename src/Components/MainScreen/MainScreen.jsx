import React from "react";
import InitialState from '../InitialState/InitialState';
import SearchResults from "../SearchResults/SearchResults";

function MainScreen({ isFind }) {


  return (
    <div>
      {isFind
      ? <SearchResults/>
      : <InitialState/>
      }
    </div>
  )
}
export default MainScreen;