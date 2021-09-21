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
  const [totalResults, setTotalResults] = useState(100);  
 
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
  
  const genres = [
    {"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},
    {"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},
    {"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},
    {"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},
    {"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},
    {"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}
  ];  

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
    totalResults,  
    setTotalResults,
    genres   
  };  

  return (
    <GlobalStateContext.Provider value={data}>
      {props.children}      
    </GlobalStateContext.Provider>
  );
}; 

