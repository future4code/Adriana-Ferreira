import React from 'react';
import {HeadContainer, Title} from './styled';

function Header() {
    return (
        <HeadContainer>
            <div>
               <Title>Popular Movies</Title>               
            </div>

            <div>
                <input
                    type="text"               
                    placeholder="Search titles"              
                />
                <button>Search</button>
            </div>

            <div>
               <select>
                    <option value="0">Select genre:</option>
                    <option value="1">Romances</option>
                    <option value="2">Comedies</option>
                    <option value="3">Horror</option>
                    <option value="4">Documentaries</option>
                    <option value="5">Action</option>                   
               </select>
            </div>
        </HeadContainer>
    )
}

export default Header
