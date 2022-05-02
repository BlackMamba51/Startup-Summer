import React from "react";
import './usernotfound.css';
function UserNotFound() {

  return (
    <div className="notfound">
      <div className="container">
        <div className="notfound__body">
          <div className="notfound-svg"></div>
          <div className="state-text">User not found</div>
        </div>
      </div>
    </div>
  )
}

export default UserNotFound;