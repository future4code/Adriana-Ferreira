import React from 'react';
import {HeadContainer, Title} from './styled';
import SearchBar from '../SearchBar/SearchBar'
import SelectGender from '../SelectGender/SelectGender';

function Header(props) {
    
    return (
        <HeadContainer>
            <div>
               <Title>Popular Movies</Title>               
            </div>
            <SearchBar/>
            <SelectGender/>
        </HeadContainer>
    )
}

export default Header
