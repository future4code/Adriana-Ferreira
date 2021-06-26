import React from 'react'
import { Title, LoginContainer, SignButton } from './styles'
import { Button } from '@material-ui/core'
import LoginForm from './LoginForm'
import { useHistory } from 'react-router-dom'
import { goToRegisterPage } from '../../routes/coordinator'
import useUnprotectedPage from '../../hooks/useUnprotectedPage'

const LoginPage = ({ setRightButtonText }) => {
    useUnprotectedPage()
    const history = useHistory()

    return (
        <LoginContainer>
            <Title>LabEddit!</Title>
            <LoginForm setRightButtonText={setRightButtonText} />
            <SignButton>
                <Button
                    onClick={() => goToRegisterPage(history)}
                    type={'submit'}
                    fullWidth
                    variant={'contained'}
                    color={'primary'}
                    margin={'normal'}
                >
                    Cadastre-se
                </Button>
            </SignButton>
        </LoginContainer>
    )
}

export default LoginPage;

