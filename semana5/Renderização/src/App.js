import React from 'react';
import styled from 'styled-components';
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

`

export default class App extends React.Component {
  state = {
    posts: [
      {
        nome: "Paulinha",
        fotoUser: "https://picsum.photos/50/50",
        fotoPostada: "https://picsum.photos/200/150",
        novoPost:""
      },
      {
        nome: "Zeroberto",
        fotoUser: "https://picsum.photos/400/400?a=1",
        fotoPostada: "https://picsum.photos/200/150?a=2",
        novoPost:""
      },
      {
        nome: "Una",
        fotoUser: "https://picsum.photos/50/50?a=2",
        fotoPostada: "https://picsum.photos/200/150?a=3",
        novoPost:""
      }   
    ]
  };

  render() {
    const postUser = this.state.posts.map ((posta)=>{
      return (    
        <MainContainer>
          <Post
          nomeUsuario= {posta.nome}
          fotoUsuario= {posta.fotoUser}
          fotoPost= {posta.fotoPostada}            
          />   
        </MainContainer>           
      );
    });
      return (
          <MainContainer>
          {postUser}         
          </MainContainer>            
      );
    }
  }  

    

