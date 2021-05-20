import React from "react"
import axios from "axios"
import TelaListaUsuarios from "./components/TelaListaUsuarios";
import TelaCadastro from "./components/TelaCadastro";

export default class App extends React.Component {

  state = {
    telaAtual: "cadastro",

  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "cadastro":
        return <TelaCadastro/>
      case "lista":
        return <TelaListaUsuarios/>
      default:
        return <div>Erro! Página não encontrada.</div>
    }
  }

  irParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  }

  irParaLista = () => {
    this.setState({telaAtual: "lista"})
  }

  componentDidMount(){
    this.getPlayLists();
  }

  handleName = (e) => {
    this.setState({inputName: e.target.value})
  }

  handleEmail = (e) => {
    this.setState ({inputEmail: e.target.value})
  }

  getUsers = () => {
    const header = {
      headers: {
        Authorization: "adriana-ferreira-paiva"
      }
    };

    axios
      .get(url, header) 
      .then((res) => {
        this.setState({users: res.data});
        console.log(res.data.name)
      })
      .catch((err) => {
        console.log(err)
      });
    };

    createForm = () => {
      const header = {
        headers: {
          Authorization: "adriana-ferreira-paiva"
        }
      };

      const body = {
        name: this.state.inputName
        email: this.state.inputEmail
      }
    
      axios.post(url, body, header)
      .then((name) => {
        alert("Dados adicionados com sucesso")
        this.setState({inputName: ""})
        this.getUsers()
      })
      .catch((err) => {
        alert(err.response.data);
      });
    };
  
render(){
   const form = this.state.playlists.map((play) => {
     return <li key={play.id}>{play.name}</li>;
   });

  return (
    <div>  
       {this.escolheTela()}  
    </div>
  )
 }
}
