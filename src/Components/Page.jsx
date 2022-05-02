import React, {useEffect, useState} from 'react';
import Header from './Header/Header';
import Loader from './Loader/Loader';
import { getUser, userInfo } from '../utils/api';
import MainScreen from './MainScreen/MainScreen';
import { getPageCount } from '../utils/pages';


function Page() {
  const [currentRepos, setCurrentRepos] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [perPage, setPerPage] = useState(4);
  const [firstRepo, setFirstRepo] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isFind, setIsFind] = useState(false);

  async function changePage(event) {
    const newFirstRepo = (event.selected * perPage) % userInfo.repos;
    setFirstRepo(newFirstRepo);
  }

  useEffect(() => {
    const lastRepo = firstRepo + perPage;
    setCurrentRepos(userInfo.reposList.slice(firstRepo, lastRepo));
  }, [firstRepo, perPage]);

  async function search(event) {
    if (event.which === 13) {
      setIsLoading(true);
      await getUser(event.target.value);
      console.log(currentRepos);
      event.preventDefault();
      if (userInfo.status !== 404) {
        setIsFind(true);
        setTotalPages(getPageCount(userInfo.repos, perPage));
        setFirstRepo(0);
        setCurrentRepos(userInfo.reposList.slice(firstRepo, firstRepo + perPage));
      } else {
        setIsFind(false);
      }
      setIsLoading(false);
    }
  }

  return (
    <div>
      <Header search={search}/>
      {isLoading
      ? <Loader/>
      : <MainScreen changePage={changePage} 
                    isFind={isFind}
                    totalPages={totalPages}
                    currentRepos={currentRepos}
                    firstRepo={firstRepo}/>
      }
    </div>
  )
}

export default Page;