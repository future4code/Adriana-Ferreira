import React from 'react';
import {render} from '@testing-library.react'

export default class etapa1 extends React.Component {

    render(){
      return (
        <div>
           <h1>ETAPA 1 - DADOS GERAIS</h1>
           <div>
             <label for="text">1. Qual é o seu nome ?</label>
             <input id="nome"></input>
           </div> 

           <div>
             <label for="text">2. Qual é a sua idade ?</label>
             <input id="idade"></input>
           </div> 

           <div>
             <label for="text">3. Qual é o seu email?</label>
             <input id="email"></input>
           </div> 

           <div>
             <label for="text">4. Qual é a sua escolaridade ?</label>
             <input id="escolaridade"></input>
           </div> 

           <select>
             <option/>
           </select> 

           <div>
             <button onClick={this.props.proximaEtapa}></button>
           </div> 
       </div>
      );
    }
}    
