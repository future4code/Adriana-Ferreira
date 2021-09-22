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
  const [currentGenre, setCurrentGenre] = useState([]);   
  const [item, setItem] = useState([]);
 
  useEffect(() => { 
    getMovies();
  }, []); 
  
  useEffect(() => {
    setFilteredMovies(
      movies && movies.filter(movie => {
        return movie.title.toLowerCase().includes(search.toLowerCase())
      }))   
  },[search, movies]);   

  useEffect(() => {
    getMoviesByCategory(currentGenre);
  }, [currentGenre]);

  const getMovies = async () => {
    setLoading(true); 
      const res = await axios.get(BASE_URL);       
      setMovies(res.data.results);          
      setLoading(false);   
  };  
  
  const getMoviesByCategory = (currentGenre) => { 
    setLoading(true);   
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=bbb3c5956c9ee54b49b8031bbbffd77b&with_genres=${currentGenre}`)
      .then(data=>data.json())
      .then(data=>{
          setMovies(data.results)  
          setLoading(false);         
      })      
  }     

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
    item,
    setItem,    
    currentGenre,
    setCurrentGenre    
  };  

  return (
    <GlobalStateContext.Provider value={data}>      
      {props.children}            
    </GlobalStateContext.Provider>
  );
}; 

