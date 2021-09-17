import React from 'react';
import {GenderButton, HeadContainer, Title, TitleContainer} from './styled';
import SearchBar from '../SearchBar/SearchBar';
import { useHistory } from 'react-router';
import { goToCategories } from '../../route/coordinator';

const Header = () => {
    const history = useHistory();

    return (
        <HeadContainer>
            <TitleContainer>              
               <Title>Popular Movies</Title>               
            </TitleContainer>
            <SearchBar/>           
            <GenderButton onClick={() => goToCategories(history)}>Search by genre</GenderButton>
        </HeadContainer>
    )
}

export default Header
