import styled from "styled-components";

export const ProfileBoard = styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
  flex-direction:column;    
`  
export const SearchArea = styled.div`
  display:flex;
  justify-content: center;
  align-items:center;
  background-color:#D8712D;
  width:45rem;  
  padding:14px;
  border-radius: 10px;  
    input{     
        padding: 8px; 
        margin:2px;   
        border-radius: 5px; 
        border:0;   
        cursor: pointer;
        width: 40rem;
        font-size:17px;
        &:hover{
          opacity: .9;          
        }  
    }
    button{
        padding: 8px;    
        border-radius: 5px; 
        border:0;   
        cursor: pointer;
        background-color:#edba77; 
        img{
          width:20px;
          &:hover{
          opacity: .9;          
        }  
      }
    }
`
