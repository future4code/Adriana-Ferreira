import styled from "styled-components"

export const NavBoard = styled.div`
   position: fixed;
   top: 0;
   width: 100%;
   padding: 20px;
   height:30px;
   z-index:1;
   display: flex;
   justify-content: space-between;
   background-color:#111;
   transition-timing-function:ease-in;
   transition: all 0.5s;
`
export const NavLogo = styled.h1`
   position: fixed;
   left: 20px;
   width: 80px;
   object-fit: contain;
`
export const NavAvatar = styled.img`
   position: fixed;
   right: 20px;
   width: 30px;
   object-fit:contain;
`
