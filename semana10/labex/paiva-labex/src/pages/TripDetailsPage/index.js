import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTitle';
import CandidatesList from './CandidatesList';
import TripInfoCard from './TripInfoCard';
import { ContentContainer } from './styles';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const TripDetailsPage = (props) => {
    const [trip, setTrip] = useState()
    const params = useParams()

    useEffect(() => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/adriana-paiva/trip/${params.tripId}`, {
            headers: {
                auth: window.localStorage.getItem('token')
            }
        }).then((res) => {
            setTrip(res.data.trip)
        })
    }, [])

    const decideCandidate = (approve) => {
        const body = {
            approve: approve
        }
        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/adriana-paiva/trips/${props.tripId}/candidates/${props.candidate.id}/decide`, body, {
            headers: {
                auth: window.localStorage.getItem('token')
            }
        })
    }

    return (
        <div>
            <PageTitle title={'Detalhes das viagens'} />
            {trip ? <ContentContainer>
                <TripInfoCard info={trip} />
                <CandidatesList
                    candidates={trip.candidates}
                    tripId={params.tripId}
                    decideCandidate={this.decideCandidate}
                />
            </ContentContainer> : <div>Carregando...</div>}
        </div>
    )
}

export default TripDetailsPage;