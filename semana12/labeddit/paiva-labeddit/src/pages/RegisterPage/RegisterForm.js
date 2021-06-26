import React, { useState } from 'react'
import { InputsContainer } from './styles'
import { TextField, Button, CircularProgress } from '@material-ui/core'
import useForm from '../../hooks/useForm'
import { register } from '../../services/users'
import { useHistory } from 'react-router-dom'

const RegisterForm = ({ setRightButtonText }) => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({ name: '', email: '', password: '' })
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (e) => {
        e.preventDefault()
        register(form, clear, history, setRightButtonText, setIsLoading)
    }

    return (
        <InputsContainer>
            <form onSubmit={onSubmitForm}>
                <TextField
                    name={'name'}
                    value={form.name}
                    onChange={onChange}
                    label={'Nome'}
                    variant={'outlined'}
                    fullWidth
                    margin={'normal'}
                    required
                    autoFocus
                />
                <TextField
                    name={'email'}
                    value={form.email}
                    onChange={onChange}
                    label={'E-mail'}
                    variant={'outlined'}
                    fullWidth
                    margin={'normal'}
                    required
                    type={'email'}
                />
                <TextField
                    name={'password'}
                    value={form.password}
                    onChange={onChange}
                    label={'Senha'}
                    variant={'outlined'}
                    fullWidth
                    margin={'normal'}
                    required
                    type={'password'}
                />
                <Button
                    type={'submit'}
                    fullWidth
                    variant={'contained'}
                    color={'primary'}
                    margin={'normal'}
                >
                    {isLoading ? <CircularProgress color={'inherit'} size={24} /> : <>Cadastrar</>}
                </Button>
            </form>
        </InputsContainer>

    )
}

export default RegisterForm;