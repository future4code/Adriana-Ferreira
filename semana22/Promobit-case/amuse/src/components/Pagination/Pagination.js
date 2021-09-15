import React, { useContext } from 'react';
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { Paginator, PaginatorNumbers, PageLink } from './styled';

const Pagination = (props) => {
    const pageLinks = []

    for(let i = 1; i <= props.pages; i++){
      let active = props.currentPage === i ? 'active': '';

      pageLinks.push(<PaginatorNumbers key={i} onClick={()=>props.nextPage(i)}>
         <PageLink href='#'>{i}</PageLink>
      </PaginatorNumbers>)
    }   
    
    return (
        <div>
          <Paginator>
              {pageLinks}           
          </Paginator>        
        </div>
    )
}

export default Pagination;