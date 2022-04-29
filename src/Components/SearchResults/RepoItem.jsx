import React from "react";

function RepoItem({ repo }) {

  return (
    <a href={repo.html_url} target="_blank">
      <div className="repo-item">
        <div className="repo-name">{repo.name}</div>
        <div className="repo-description">{repo.description}</div>
    </div>
    </a>
  )
}

export default RepoItem;