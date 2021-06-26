import React from 'react'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'
import RegisterForm from './RegisterForm'
import { RegisterPageContainer, Title } from './styles'

const RegisterPage = ({ setRightButtonText }) => {
    useUnprotectedPage()
    return (
        <RegisterPageContainer>
            <Title>LabEddit!</Title>
            <RegisterForm />
        </RegisterPageContainer>
    )
}

export default RegisterPage;

