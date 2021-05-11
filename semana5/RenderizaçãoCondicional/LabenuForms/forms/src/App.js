import React from 'react';
import ReactDOM from "react-dom";

import Etapa1 from './components/etapa1';
import Etapa2 from './components/etapa2';
import Etapa3 from './components/etapa3';
import Etapa4 from './components/etapa4';
import './App.css';

export default class App extends React.Component {

  state = {
    etapas: 1
  };

  renderizaEtapa = () => {

    switch (this.state.etapas){
      case 1:
        return <Etapa1/>;
        break;
      case 2:
        return <Etapa2/>;
        break;  
      case 3:
        return <Etapa3/>;
        break;  
      case 4:
        return <Etapa4/>;
        break;  
      default:
        return <Etapa4/>;
    }   
  };
  
  proximaEtapa = () => {
      this.setState({etapa: this.state.etapa + 1});
  };

  render() {
    return(
      <div className="App">
         {this.renderizaEtapa()}
         <br />
         {this.state.etapa !== 4 && (
           <button onClick={this.proximaEtapa}>Próxima Etapa</button>
         )}
      </div>  
    );
  }
}
const rootElement = document.getElementById("root");
reactDOM.render(<App />, rootElement)