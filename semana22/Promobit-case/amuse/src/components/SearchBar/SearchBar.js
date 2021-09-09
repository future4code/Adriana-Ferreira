import React, {useContext, useState, useEffect} from 'react';
import { SearchContainer, SearchForm, SearchField, SearchButton } from './styled';
import searchIcon from '../../img/search.png';
import { GlobalStateContext } from '../../global/GlobalStateContext';
import MovieCard from '../MovieCard/MovieCard';

const SearchBar = () => {  
   const { movies } = useContext(GlobalStateContext);  
   const [search, setSearch] = useState('');
   const [filtered, setFilteredMovies] = useState('');
   
   /* useEffect(() => {
      setFilteredMovies(
        movies.filter(movie => {
          return movie.title.toLowerCase().includes(search.toLowerCase())
        })
      )
    }, [search, movies]);

   const filteredMovies = movies.map((movie, id)=>(
      <MovieCard key={id} {...movie}/>
   )); */

   return (
        <SearchContainer>
           <SearchForm action="/">                      
              <SearchField 
                 type="text"
                 placeholder="Search by title"  
                 onChange={e => setSearch(e.target.value)}                          
              />            
              <SearchButton type="submit">
                 <img src={searchIcon}/>
              </SearchButton>
           </SearchForm>                    
        </SearchContainer>
    )
}

export default SearchBar

