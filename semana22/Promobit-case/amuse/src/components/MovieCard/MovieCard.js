import React, {useContext} from 'react';
import { useHistory } from 'react-router';
import { img_url } from '../../constants/Urls/img_url';
import { goToMovieDetails } from '../../route/coordinator';
import {PosterBoard, Poster, ContainerCard} from './styled';
import { GlobalStateContext } from "../../global/GlobalStateContext";

const MovieCard = () => {      
    const { filteredMovies } = useContext(GlobalStateContext);
    const history = useHistory();  
    
    const movieFrames = filteredMovies.map((movie) => {       
    return (
        <PosterBoard>
            <Poster             
                key={movie.id}                       
                src={`${img_url}${movie.poster_path}`} 
                alt={movie.name}/>                
            <button onClick={() => goToMovieDetails(history)}>View details</button>                 
        </PosterBoard>
       
    )});

    return(
        <ContainerCard>
            {movieFrames}
        </ContainerCard>
    )
};

export default MovieCard;
