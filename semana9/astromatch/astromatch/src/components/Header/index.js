import React from 'react'
import { HeaderContainer } from './styles'
import { Button } from '@material-ui/core'


export default function Header({ changePage }) {
    return (
        <HeaderContainer>
            <div></div>
            <div></div>
            <h1>astromatch</h1>
            <Button onClick={changePage}>Matches</Button>
        </HeaderContainer >
    );
}