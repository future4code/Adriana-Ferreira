import React from "react"
import axios from "axios"
import styled from "styled-components"

const TelaInteira = styled.div` 
   color: purple;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction:column;
   padding:10%;
   height:10%;
   width:80%;
   margin: 0 auto  
`
const Botao = styled.button`
   border-radius: 20%;
   background-color:purple;
   color:white;
   width:40%;
   padding: 3%; 
   font-size: 20px; 
   display: flex;
   justify-content: center;
   margin: 0 auto
`

export default class App extends React.Component{

  state = {
    activity: {}
  }

  getActivity = () => {
    axios
    .get('https://www.boredapi.com/api/activity/')
    .then((res) => {
      console.log(res.data);
      this.setState({activity: res.data})
    })
    .catch((err) => {
      console.log(err);
    });
  };

  render(){

    const {activity, type} = this.state.activity

  return (
    <TelaInteira>
       <div>
         <h1>Tá entediada, né minha filha?</h1>
         <h2>Temos algumas ideias pra você sair dessa</h2>
         <Botao onClick={this.getActivity}>Clique e confira!</Botao>  
       </div> 
       <div> 
         <p>{activity}</p>
         <p>{type}</p>  
       </div>        
    </TelaInteira>
  );
 }
}
