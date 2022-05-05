import React from 'react';
import SearchResults from '../SearchResults/SearchResults';
import States from '../States';

function MainScreen({ isFind, totalPages, currentRepos, changePage, firstRepo }) {


  return (
    <div>
      {isFind
      ? <SearchResults firstRepo={firstRepo} 
                      changePage={changePage} 
                      currentRepos={currentRepos} 
                      totalPages={totalPages}/>
      : <States/>
      }
    </div>
  )
}
export default MainScreen;