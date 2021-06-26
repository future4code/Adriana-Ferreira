import React from 'react'
import FeedCard from '../../components/FeedCard/FeedCard'
import useProtectedPage from '../../hooks/useProtectedPage'
import useRequestData from '../../hooks/useRequestData'
import { Url } from '../../constants/urls'
import { FeedListContainer } from './styles'
import Loading from '../../components/Loading/Loading'

const FeedPage = () => {
    useProtectedPage()
    const feeds = useRequestData([], `${Url}/posts`)

    const feedCards = feeds.map((feed) => {
        return (
            <FeedCard
                key={feed.id}
                title={feed.title}
                post={feed.post}
                onClick={() => null}
            />
        )
    })

    return (
        <FeedListContainer>
            {feeds.length > 0 ? feeds : <Loading />}
        </FeedListContainer>
    )
}

export default FeedPage;


