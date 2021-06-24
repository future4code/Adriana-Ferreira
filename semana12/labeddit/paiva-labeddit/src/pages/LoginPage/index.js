import React from 'react'
import { Title, LoginContainer, InputsContainer, LoginFormContainer, SignButton } from './styles'
import { TextField } from '@material-ui/core'
import useForm from '../../hooks/useForm'


const LoginPage = () => {
    const [form, onChange, clear] = useForm({ email: '', password: '' })

    const onSubmitForm = () => {

    }

    return (
        <LoginContainer>
            <Title>LabEddit!</Title>
            <InputsContainer>
                <form onSubmit={onSubmitForm}>
                    <TextField
                        name={'email'}
                        value={form.email}
                        onChange={onChange}
                        label={'E-mail'}
                    />
                    <TextField
                        name={'password'}
                        value={form.password}
                        onChange={onChange}
                        label={'Senha'}
                    />
                </form>
            </InputsContainer>
        </LoginContainer>
    )
}

export default LoginPage;

