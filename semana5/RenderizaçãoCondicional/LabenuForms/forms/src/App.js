import React from 'react';
import './App.css';
import Etapa1 from './components/etapa1';
import Etapa2 from './components/etapa2';
import Etapa3 from './components/etapa3';
import Etapa4 from './components/etapa4';

export default class App extends React.Component {

  state = {
    etapas: "1"
  };

  proximaEtapa = () => {

    switch (this.state.etapas){
      case "1":
        this.setState({etapas= "Etapa1"});
        break;
      case "2":
        this.setState({etapas= "Etapa2"});
        break;  
      case "3":
        this.setState({etapas= "Etapa3"});
        break;  
      case "4":
        this.setState({etapas= "Etapa4"});
        break;  
      default:
        etapas= null;
    }   
  }     

  render() {
    const pagina = () => {

      switch (this.state.etapas){
        case "1":
          return <Etapa1 proximaEtapa = {this.proximaEtapa}/>;
          break;
        case "2":
          return <Etapa2 proximaEtapa = {this.proximaEtapa}/>;
          break;  
        case "3":
          return <Etapa3 proximaEtapa = {this.proximaEtapa}/>;
          break;  
        case "4":
          return <Etapa4 proximaEtapa = {this.proximaEtapa}/>;
          break;  
        default:
          proximaEtapa = null;
      }    
    }
     
    return (
      <div className="App">
         {pagina()}
      </div>  
    );
  }
}

