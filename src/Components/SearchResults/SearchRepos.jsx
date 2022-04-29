import React from "react";
import { userInfo } from "../../utils/api";
import RepoItem from "./RepoItem";
function SearchRepos() {

  return (
    <div className="user-repos">
      <h2 className="repos-count">Repositories ({userInfo.repos})</h2>
      <div className="repos-list">
        {userInfo.reposList.map((repo) => <RepoItem key={repo.id} repo={repo}/>)}
      </div>
    </div>
  )
}

export default SearchRepos;