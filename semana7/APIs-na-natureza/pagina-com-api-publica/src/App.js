import React from "react"
import axios from axios
import './App.css';
import { render } from "@testing-library/react";

export default class App extends React.Component{

  getActivity = () {
    axios.get('')
  }
  render()
  return (
    <div className="App">
       <h2>Tá entediada, né minha filha?</h2>
       <h2>Pensamos em algumas atividades pra vc</h2>
       <button>Clique e confira</button>      
    </div>
  );
 }


export default App;
