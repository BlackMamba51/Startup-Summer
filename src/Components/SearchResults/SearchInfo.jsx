import React from "react";
import { userInfo } from "../../utils/api";

function SearchInfo() {

  return (
    <div className="user-info">
      <div className="user-avatar">
        <img src={userInfo.avatar} alt={userInfo.login} />
      </div>
      <div className="user-name">{userInfo.name}</div>
      <a href={userInfo.userUrl} target="_blank">
        <div className="user-login">{userInfo.login}</div>
      </a>
      <div className="user-subscribes">
        <div className="flex-group">
          <div className="followers-svg"></div>
          <div className="user-followers user-text">{userInfo.followers} followers</div>
        </div>
        <div className="flex-group">
          <div className="following-svg"></div>
          <div className="user-following user-text">{userInfo.following} following</div>
        </div>
      </div>
    </div>
  )
}
export default SearchInfo;