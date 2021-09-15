import React, { useEffect, useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import {BASE_URL} from "../constants/Urls/base_url";
import axios from "axios";

export const GlobalState = (props) => {
  const [movies, setMovies] = useState([]);  
  const [loading, setLoading] = useState(false); 
  const [search, setSearch] = useState(''); 
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);  
  const [totalResults] = useState(100);
 
  useEffect(() => { 
    getMovies();
  }, []); 
  
  useEffect(() => {
    setFilteredMovies(
      movies.filter(movie => {
        return movie.title.toLowerCase().includes(search.toLowerCase())
      }))   
  },[search, movies]);   

  const getMovies = async () => {
    setLoading(true); 
      const res = await axios.get(BASE_URL);       
        setMovies(res.data.results);          
        setLoading(false);   
  };   
  
  if(loading){
    return <p>Loading movies...</p>
  };   

  const data = {
    movies,
    setMovies,     
    loading, 
    setLoading,
    search,
    setSearch,
    filteredMovies,
    setFilteredMovies, 
    currentPage,
    setCurrentPage,
    totalResults   
  };  

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}      
    </GlobalStateContext.Provider>
  );
}; 

