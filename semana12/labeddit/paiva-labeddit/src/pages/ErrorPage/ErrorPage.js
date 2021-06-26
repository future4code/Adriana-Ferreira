import { Typography, Button } from '@material-ui/core';
import React from 'react'
import { useHistory } from 'react-router-dom';
import { ErrorImage, ErrorPageContainer } from './styles';
import ErrorBaloon from '../../assets/img/errorBaloon.png'
import { goToFeedPage } from '../../routes/coordinator';

const ErrorPage = () => {
    const history = useHistory()

    return (
        <ErrorPageContainer>
            <ErrorImage src={ErrorBaloon} />
            <Typography color='secondary' variant={'h4'} align={'center'}>Erro 404 - Página não encontrada</Typography>
        </ErrorPageContainer>
    )
}

export default ErrorPage;
