import styled from "styled-components";

export const MovieDetailsContainer = styled.div`
   display: flex;
   flex-direction:row;
   margin: 5rem auto;  
   background-color:#120826;
   width:80vw;
   height: 80vh;
   color: #fcba03;
   padding: 2rem;
`
export const PosterBoard = styled.div`
   img{
      max-height:576px;
   }
`
export const InfoBoard = styled.div`
   max-width: 900px;
   padding: 2rem;
   font-size: 18px;
   text-justify:justify;
   h4{
       text-align: center;
       padding-bottom:14px;
   }    
`
