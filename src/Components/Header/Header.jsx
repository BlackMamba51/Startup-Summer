import React from "react";
import './header.css';
function Header({ search }) {
  

  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <div className="github-logo"></div>
          <div className="query-string">
          <input onKeyPress={ (e) =>  search(e)} type="text" className="search-input" placeholder="Enter GitHub username"/>
          <div className="search-svg"></div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;