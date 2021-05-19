import React from "react"
import axios from "axios"

const BASE_URL="https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"

export default class App extends React.Component {

  state = {
    playlists: [],
    inputName: ""
  };

  componentDidMount(){
    this.getPlayLists();
  }

  handleName = (e) => {
    this.setState({inputName: e.target.value})
  }

  getPlayLists = () => {
    const header = {
      headers: {
        Authorization: "adriana-ferreira-paiva"
      }
    };

    axios
      .get(BASE_URL, header) 
      .then((res) => {
        this.setState({playlists: res.data.result.list});
      })
      .catch((err) => {
        alert(err.response.data);
      });
    };

    createPlaylist = () => {
      const header = {
        headers: {
          Authorization: "adriana-ferreira-paiva"
        }
      };

      const body = {
        name: this.state.inputName
      }
    
      axios.post(BASE_URL, body, header)
      .then(() => {
        alert("Playlist adicionada com sucesso")
        this.setState({inputName: ""})
      })
      .catch(() => {
        alert(err.response.data);
      });
    };
  
render(){
   const playlistComponents = this.state.playlists.map((play) => {
     return <li key={play.id}>{play.name}</li>;
   });

  return (
    <div>  
      <div>   
        <h1>Labenusers</h1>
        <button onClick="">Trocar de página</button>
      </div>

      <div>  
        <h2>Criar usuário</h2>
        <input
        placeholder="Nome"  
        value={this.state.inputName} 
        onChange={this.handleName} />
        <input
        placeholder="E-mail"
        value={this.state.inputEmail}
        onChange={this.handleEmail}/>
        <button onClick={this.createPlaylist}>Criar</button>  
        {playlistComponents}              
      </div>
    </div>
  );
 };
}
