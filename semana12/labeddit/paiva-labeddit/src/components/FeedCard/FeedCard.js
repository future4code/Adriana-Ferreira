import { Typography } from '@material-ui/core'
import { CardActionArea, CardMedia } from '@material-ui/core'
import React from 'react'
import { FeedCardContainer, FeedCardContent } from './styles'

export const FeedCard = (props) => {
    return (
        <FeedCardContainer onClick={props.onClick}>
            <CardActionArea>
                <CardMedia
                    component={'img'}
                    alt={props.title}
                    height={'150px'}
                    image={props.image}
                    title={props.title}
                />
                <FeedCardContent>
                    <Typography align={'center'}>
                        {props.title.toUpperCase()}
                    </Typography>
                </FeedCardContent>
            </CardActionArea>
        </FeedCardContainer>
    )
}

export default FeedCard;
