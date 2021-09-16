import React, { useState, useEffect } from 'react';
import { img_url } from '../../constants/Urls/img_url';
import { InfoBoard, MovieDetailsContainer, PosterBoard} from './styled';

const MovieDetails = ({match}) => {
  const [item, setItem] = useState([]);
  
  console.log(match);

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const fetchItem = await fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=bbb3c5956c9ee54b49b8031bbbffd77b`);
    const item = await fetchItem.json();
    setItem(item);

    console.log(item);
  }    

  return (
    <MovieDetailsContainer>
       <PosterBoard>
          <img
          src={`${img_url}${item.poster_path}`} 
          alt={item.title}
          />
       </PosterBoard>
       <InfoBoard>
          <h4>{item.title}</h4>
          <div>{item.overview} </div>          
       </InfoBoard>       
    </MovieDetailsContainer>
  )
}

export default MovieDetails;
