import styled from "styled-components";

export const MovieDetailsContainer = styled.div`
   display: flex;
   flex-direction:row;
   flex-wrap:wrap;
   align-items: center;
   justify-content:center;       
   color: #fcba03;
   margin: 1.5rem;   
`
export const PosterBoard = styled.div`   
   img{
      max-height:30rem;      
      margin-left:2rem;
      margin-right:2rem;   
   }
`
export const InfoBoard = styled.div`   
   max-width: 42rem;  
   font-size: 18px;
   text-align: justify;
   padding: 1rem;
   h4{
       text-align: center;
       padding-bottom:14px;
   }    
`
export const DetailsButton = styled.button`
  background-color:#381447;
  border: none;
  padding:0.5rem;
  margin-top:1rem;
  margin-left:1.5rem;  
  border-radius: 50%;
  :hover{
      background-color: #5338ab;
   } 
  img{
      height:32px; 
   
  }  
`
