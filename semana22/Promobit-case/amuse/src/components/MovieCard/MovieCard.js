import React from 'react';
import { img_url } from '../../constants/Urls/img_url';
import {PosterBoard, Poster} from './styled'

function MovieCard(props) {
    return (
        <PosterBoard>
            <Poster             
               key={props.movie.id}                       
               src={`${img_url}${props.movie.poster_path}`} 
               alt={props.movie.name}/>  
               <button>View details</button>    
        </PosterBoard>
    )
};

export default MovieCard;
