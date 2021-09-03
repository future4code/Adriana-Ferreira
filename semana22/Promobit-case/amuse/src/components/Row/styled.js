import styled from 'styled-components'

export const Row = styled.div`
  margin-left: 20px;
`
export const RowTitle = styled.h2`
  text-align: center;
`
export const RowPosters = styled.div`
  display:flex;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 20px;
  ::-webkit-scrollbar{
     display: none;
  }
`
export const RowPoster = styled.img`
  object-fit: contain;
  width:100%;
  max-height:100px;
  margin-right: 10px;
  transition:transform 450ms;
  :hover{
     transform: scale(1.08);   
  }   
  isLargeRow{
    max-height: 250px;
    :hover{
     transform: scale(1.09);   
    }  
  }
`
export const RowPosterLarge = styled(RowPoster)`
   max-height: 250px;
   transform: scale(1.09);
`