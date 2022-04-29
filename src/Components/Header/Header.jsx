import React from "react";
import { getUser, userInfo } from "../../utils/api";
import './header.css';
function Header( {setIsLoading, setIsFind} ) {
  
  async function search(event) {
    if (event.which === 13) {
      event.preventDefault();
      setIsLoading(true);
      await getUser(event.target.value);
      setIsLoading(false);
      console.log(userInfo);
      setIsFind(true);
    }
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <div className="github-logo"></div>
          <div className="query-string">
          <input onKeyPress={search} type="text" className="search-input" placeholder="Enter GitHub username"/>
          <div className="search-svg"></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;