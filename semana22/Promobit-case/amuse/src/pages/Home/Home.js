import React, { useContext} from "react";
import MovieCard from '../../components/MovieCard/MovieCard';
import Header from "../../components/Header/Header";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import Pagination from "../../components/Pagination/Pagination";

const Home = () => {   
  const {setMovies, currentPage, setCurrentPage, totalResults} = useContext(GlobalStateContext); 
    
  const nextPage = (pageNumber) => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=bbb3c5956c9ee54b49b8031bbbffd77b&page=${pageNumber}`)
      .then(data=>data.json())
      .then(data=>{
        setMovies(data.results)
        setCurrentPage(pageNumber)     
      })
  }

  const numberPages = Math.floor(totalResults/5)   

  return (
    <div>
      <Header/>        
      <MovieCard/>        
        {totalResults > 20? 
          <Pagination 
            pages={numberPages} 
            nextPage={nextPage}
            currentPage={currentPage}
          />:''
        }
    </div>
  );
};

export default Home;

