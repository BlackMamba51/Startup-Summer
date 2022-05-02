import React from 'react';
import './searchresults.css';
import SearchInfo from './SearchInfo';
import SearchRepos from './SearchRepos';
import { userInfo } from '../../utils/api';
import EmptyRepos from '../EmptyRepos/EmptyRepos';
function SearchResults({ page, setPage, changePage, totalPages, currentRepos, firstRepo }) {
   
  return (
    <div className="user-section">
      <div className="container">
        <div className="user-section__body">
          <SearchInfo/>
          {userInfo.reposList.length === 0
          ? <EmptyRepos/>
          : <SearchRepos firstRepo={firstRepo} 
                        currentRepos={currentRepos} 
                        totalPages={totalPages} 
                        setPage={setPage}  
                        page={page} 
                        changePage={changePage}/>
          }
        </div>
      </div>
    </div>
  )
}
export default SearchResults;