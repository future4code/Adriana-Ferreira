import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { LoadingContainer } from './styles'

const Loading = () => {
    return (
        <LoadingContainer>
            <CircularProgress />
        </LoadingContainer>
    )
}

export default Loading;