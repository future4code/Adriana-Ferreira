import React, { useState } from 'react'
import { TextField, Button, CircularProgress } from '@material-ui/core'
import { InputsContainer } from '../RegisterPage/styles'
import useForm from '../../hooks/useForm'
import { createPost } from '../../services/posts'

const FeedPageForm = () => {
    const history = useHistory()
    const [form, onChange, clear] = useForm({ title: '', body: '' })
    const [isLoading, setIsLoading] = useState(false)

    const onSubmitForm = (event) => {
        event.preventDefault()
        createPost(form, clear, setIsLoading)
    }

    return (
        <form onSubmit={onSubmitForm}>
            <AddFeedContainer>
                <InputsContainer>
                    <TextField
                        name={'title'}
                        value={form.title}
                        onChange={onChange}
                        label={'Título'}
                        variant={'outlined'}
                        fullWidth
                        required
                        autoFocus
                        margin={'normal'}
                    />
                    <TextField
                        name={'body'}
                        value={form.body}
                        onChange={onChange}
                        label={'Descrição'}
                        variant={'outlined'}
                        fullWidth
                        required
                        autoFocus
                        margin={'normal'}
                    />
                    <Button
                        type={'submit'}
                        fullWidth
                        variant={'contained'}
                        color={'primary'}
                        margin={'normal'}
                    >
                        {isLoading ? <CircularProgress color={'inherit'} size={24} /> : <>Adicionar</>}
                    </Button>
                </InputsContainer>
            </AddFeedContainer>
        </form>
    )
}

export default FeedPageForm;