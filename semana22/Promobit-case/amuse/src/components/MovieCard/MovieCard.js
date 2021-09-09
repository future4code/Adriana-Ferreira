import React from 'react';
import { useHistory } from 'react-router';
import { img_url } from '../../constants/Urls/img_url';
import { goToMovieDetails } from '../../route/coordinator';
import {PosterBoard, Poster} from './styled'

const MovieCard = (props) => {
    const history = useHistory();
    
    return (
        <PosterBoard>
            <Poster             
               key={props.movie.id}                       
               src={`${img_url}${props.movie.poster_path}`} 
               alt={props.movie.name}/>                
            <button onClick={() => goToMovieDetails(history)}>View details</button>                 
        </PosterBoard>
    )
};

export default MovieCard;
