import styled from 'styled-components'

export const Paginator = styled.ul`
   display:flex; 
   flex-wrap: wrap; 
   align-items: center;
   justify-content: center;   
`
export const PaginatorNumbers = styled.li`
   text-overflow: ellipsis;
   font-weight: bold;
   color: #381447;    
`
export const PageLink = styled.a`
   padding:0.3rem;
  
   text-decoration: none;
   color: #fcba03; 
   :hover{
      color:white;
   }
`