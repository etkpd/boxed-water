import React, { Component } from 'react';
import { Link } from 'gatsby'
import stylesPagination from './Pagination.module.scss'

import LogoPaginationNext from '../../../content/svg/pagination-next.svg'
import LogoPaginationPrev from '../../../content/svg/pagination-previous.svg'

class Pagination extends Component {

  paginationNumberLinks = () =>{
    const {
      range,
      numPages,
      currentPage,
      path,
      tagPath
    } = this.props

    const numberLinks = []

    if(currentPage-range/2<0){
      for(let i=0;i<range;i++){
        numberLinks.push(
          <li
            key={`pagination-number${i+1}`}
            className={stylesPagination.ListItem}
          >
          <Link
            to={`${path}${tagPath ? tagPath : ''}/${i === 0 ? '' : i + 1}`}
            className={stylesPagination.Link}
            activeClassName={stylesPagination.activeLink}
          >
            {i + 1}
          </Link>
        </li>
        )
      }
    } else if(currentPage+range/2>numPages){
      for(let i=numPages-range;i<numPages;i++){
        numberLinks.push(
          <li
            key={`pagination-number${i+1}`}
            className={stylesPagination.ListItem}
          >
          <Link
            to={`${path}${tagPath ? tagPath : ''}/${i === 0 ? '' : i + 1}`}
            className={stylesPagination.Link}
            activeClassName={stylesPagination.activeLink}
          >
            {i + 1}
          </Link>
        </li>
        )
      }
    } else{
      for(let i=((currentPage)-Math.ceil(range/2));i<currentPage+Math.floor(range/2);i++){
        numberLinks.push(
          <li
            key={`pagination-number${i+1}`}
            className={stylesPagination.ListItem}
          >
          <Link
            to={`${path}${tagPath ? tagPath : ''}/${i === 0 ? '' : i + 1}`}
            className={stylesPagination.Link}
            activeClassName={stylesPagination.activeLink}
          >
            {i + 1}
          </Link>
        </li>
        )
      }
    }
    return numberLinks
  }

  render() {
    const { 
      prevPage, 
      nextPage, 
      isFirst, 
      isLast
    } = this.props;

    return (
      <div className={stylesPagination.PaginationSection}>
        <div className={stylesPagination.PaginationContainer}>
          {!isFirst && (
            <Link 
              to={prevPage}
              className={stylesPagination.PrevArrow} 
              rel="prev"
            >
              <LogoPaginationPrev/>
            </Link>
          )}
            {this.paginationNumberLinks()}
          {!isLast && (
            <Link 
            to={nextPage}
            className={stylesPagination.NextArrow} 
            rel="next"
            >
              <LogoPaginationNext/>
            </Link>
          )}
        </div>
      </div>
    );
  }
}

export default Pagination;