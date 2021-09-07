import React, { useEffect, useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import {BASE_URL} from "../constants/Urls/base_url";
import axios from "axios";

export const GlobalState = (props) => {
  const [movies, setMovies] = useState([]);  
       
  useEffect(() => {    
      getMovies();
    }, []); 

  const getMovies = () => {
      axios.get(BASE_URL)
      .then((res) => {
      setMovies(res.data.results)
          
    })
    return movies
  
  }  

  console.log(movies)
    
  const data = {
    movies,
    setMovies   
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}      
    </GlobalStateContext.Provider>
  );
}; 

