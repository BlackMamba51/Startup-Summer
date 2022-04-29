import React from "react";
import { userInfo } from "../../utils/api";
import './searchresults.css';
function SearchResults() {

  return (
    <div className="user-section">
      <div className="container">
        <div className="user-section__body">
          <div className="user-info">
            <div className="user-avatar">
              <img src={userInfo.avatar} alt={userInfo.login} />
            </div>
            <div className="user-name">{userInfo.name}</div>
            <div className="user-login">{userInfo.login}</div>
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
          <div className="user-repos"></div>
        </div>
      </div>
    </div>
  )
}
export default SearchResults;