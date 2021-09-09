import React, { useContext } from "react";
import { MainContainer, ContainerCard} from './styled';
import { GlobalStateContext } from "../../global/GlobalStateContext";
import MovieCard from '../../components/MovieCard/MovieCard';
import Header from "../../components/Header/Header";

const Home = () => {
  const { movies, searchTerm, setSearchTerm } = useContext(GlobalStateContext);

    const movieFrames = movies.map((movie) => (
       <MovieCard movie={movie}/>                
    ));    

    return (
      <MainContainer>
        <Header movieFrames={movieFrames}/>        
        <ContainerCard>{movieFrames}</ContainerCard>                     
      </MainContainer>
    );
};

export default Home;



    