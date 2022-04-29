import React from "react";
import './initialstate.css';
function InitialState() {

  return (
    <div className="initial-state">
      <div className="container">
        <div className="initial-state__body">
          <div className="big-search-svg"></div>
          <div className="state-text">Start with searching a GitHub user</div>
        </div>
      </div>
    </div>
  )
}

export default InitialState;