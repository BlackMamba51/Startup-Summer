import React from "react";
import './emptyrepos.css';
function EmptyRepos() {

  return (
    <div className="empty-repos">
      <div className="empty-repos-svg"></div>
      <div className="state-text">Repository list is empty</div>
    </div>
  )
}

export default EmptyRepos;