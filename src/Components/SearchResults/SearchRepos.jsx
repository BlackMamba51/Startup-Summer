import React from 'react';
import { userInfo } from '../../utils/api';
import RepoItem from './RepoItem';
import Pagination from '../Pagination/Pagination';
function SearchRepos({ page, changePage, nextPage, prevPage, totalPages, currentRepos, firstRepo }) {

 
  return (
    <div className="user-repos">
      <h2 className="repos-count">Repositories ({userInfo.repos})</h2>
      <div className="repos-list">
        {currentRepos.map((repo) => <RepoItem key={repo.id} repo={repo}/>)}
      </div>
      <Pagination totalPages={totalPages} 
                  prevPage={prevPage} 
                  nextPage={nextPage} 
                  page={page} 
                  changePage={changePage}
                  firstRepo={firstRepo}
                  currentRepos={currentRepos}/>  
    </div>
    
  )
}

export default SearchRepos;