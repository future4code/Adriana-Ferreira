import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CardSong = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
    margin: 10px;
    padding: 0 10px;
    width: 50%;
    background-color: goldenrod;
    color: purple;
    margin: 0 auto
`

export default class TelaPrincipal extends React.Component{
    
  state = {
    songs: [],
    playlistName: ''
  };  

  onChangePlaylistNameValue = (e) => {
    this.setState({playlistName: e.target.value})
  };

  onClickCadastrar = () => {
    const newSong = {
      name: this.state.playlistName
    }
    const newList = [...this.state.songs]
    newList.push(newSong)

    this.setState({songs:[], playlistName:''})
  };

  cadastrarPlaylist = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
    const body = {
        name : this.state.playlistName
    };

    axios.post(url, body, {
        headers: {
            Authorization: 'adriana-ferreira-paiva' 
        }               
    })
    .then((res) => {
        alert('Adicionado com sucesso!')
        this.setState({playlistName: ''}) 
      })
      .catch((err) => {
          alert('Erro! Verifique se o nome digitado já foi cadastrado.') 
      });
      
   };  

    render() {
      
      const songs = this.state.songs.map((song) =>{
         return(
           <CardSong key={song.id}>
             <p>{song.name}</p>
           </CardSong>
         );
      });
       
        return(
            <CardSong>
                <h1>Crie sua playlist e divirta-se!</h1>                
                <input
                  placeholder= {'Digite o nome da playlist'}
                  value= {this.state.playlistName}
                  onChange= {this.onChangePlaylistNameValue}
                />  
                <button onClick={this.cadastrarPlaylist}>Adicionar</button>
                {songs}
            </CardSong>
        );
    }
}    