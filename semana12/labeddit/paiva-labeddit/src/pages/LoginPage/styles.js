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
export const LoginContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  width:100vw;
`
export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:80vw;
  max-width:450px;
  align-items: center;
  margin-bottom:20px;
`
export const LoginFormContainer = styled.form`
  display:flex;
  flex-direction:column;
  width:80vw;
  max-width:450px;
  align-items: center;
  margin-bottom: 20px;
`
export const SignButton = styled.button`
  width: 80vw;
  max-width: 450px;
  padding:0px;
`