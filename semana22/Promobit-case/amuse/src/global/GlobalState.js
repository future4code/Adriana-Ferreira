import React, { useEffect, useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import {BASE_URL} from "../constants/Urls/base_url";
import axios from "axios";

export const GlobalState = (props) => {
  const [movies, setMovies] = useState([]);  
  const [loading, setLoading] = useState(false);  
  const [gender, setGender] = useState('');
       
  useEffect(() => { 
    getMovies();
    }, []); 

  const getMovies = () => {
    setLoading(true); 
      axios
       .get(BASE_URL)
       .then((res) => {
         setMovies(res.data.results);
         setLoading(false);
      })  
  }

  if(loading){
    return <p>Loading movies...</p>
  }  
    
  const data = {
    movies,
    setMovies,    
    gender,
    setGender,   
    loading, 
    setLoading
  };

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}      
    </GlobalStateContext.Provider>
  );
}; 

