import styled from 'styled-components'

export const Title = styled.h1`
  display:flex;
  align-items: center;
  justify-content:center;
  font-weight:bolder;
  color: #1e0e40;  
  -webkit-text-stroke-width: 0.1rem;
  -webkit-text-stroke-color: #058220;
  font-size: 3em;   
  margin-top:3rem;
  text-shadow: 4px 4px 4px #425878;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
`
export const FeedCardContainer = styled.div`
  display:flex;
  flex-wrap:wrap;
  flex-direction:row;
  margin:30px;
`
export const FeedCardContent = styled.div`
  display:flex;
  flex-direction:column;
`
