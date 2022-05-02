import React from 'react';
import './pagination.css';
import { userInfo } from '../../utils/api';
import { getPagesArray, getPageCount } from '../../utils/pages';
import ReactPaginate from 'react-paginate';
import RightArrow from '../Arrows/RightArrow';
import LeftArrow from '../Arrows/LeftArrow';
function Pagination({ changePage, totalPages, firstRepo, currentRepos }) {

  let pagesArray = getPagesArray(totalPages);
  return (
    <div className="pagination-page">
      <div className="pagination-repos"> {firstRepo + 1} - {firstRepo + currentRepos.length} of {userInfo.repos} items</div>
      <ReactPaginate
        breakLabel="..."
        nextLabel={<RightArrow/>}
        onPageChange={changePage}
        pageRangeDisplayed={5}
        pageCount={getPageCount(userInfo.repos, 4)}
        previousLabel={<LeftArrow/>}
        pageClassName="pagination-btn"
        previousClassName="prev-page arrows"
        nextClassName="next-page arrows"
        disabledClassName="disabled-arrows"
        containerClassName="pagination"
        activeClassName="pagination-current"
        renderOnZeroPageCount={null}/>
      {/* <button value={page} onClick={(e) => prevPage(e)} className="prev-page arrows"></button>
      {pagesArray.map((number, index) => <button 
                                      className={+number === +page ? 'pagination-btn pagination-current' : 'pagination-btn'}
                                      onClick={(e) => changePage(e)} 
                                      value={number}
                                      key={index}>
        {number}
      </button>)}
      <button value={page} onClick={(e) => nextPage(e)} className="next-page arrows"></button> */}
    </div>
  )
}
export default Pagination;