import styled from 'styled-components'

export const ProfileContainer = styled.main`
  padding: 20px 20px 0;
  display: grid;
  grid-template-rows: 500px 1fr;
  & > div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`