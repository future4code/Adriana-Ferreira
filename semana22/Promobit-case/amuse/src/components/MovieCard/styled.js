import styled from "styled-components";

export const PosterBoard = styled.div`
  display: flex;
  flex-direction: column;  
  max-height:22rem; 
  background-color: #120826;
  margin-top:1.6rem;
  margin-bottom:20px;
  button{
    color: #fcba03;
    border:none;   
    background-color:#120826;
    height:2rem;
    font-size:15px;
    :hover{
      background-color:#6336b3
    }
  } 
`
export const Poster = styled.img`
  object-fit: contain;
  width:100%;
  max-height:330px;
  margin-right: 12px;
  transition:transform 450ms;
    :hover{
      transform: scale(1.08);   
    };  
`
