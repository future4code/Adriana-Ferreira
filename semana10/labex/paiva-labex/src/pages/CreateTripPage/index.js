import React from 'react';
import { Button, TextField } from '@material-ui/core';
import PageTitle from '../../components/PageTitle';
import { CreationTripForm } from './styles';
import { KeyboardDatePicker } from '@material-ui/pickers';


const CreationTripPage = () => {
    return (
        <div>
            <PageTitle title={'Criar viagem'} />
            <CreationTripForm>
                <TextField label={'Nome'} />
                <TextField label={'Planeta'} />
                <KeyboardDatePicker
                    disableToolbar
                    variant='inline'
                    format='MM/dd/yyyy'
                    margin='normal'
                    label="Data"
                />
                <TextField label={'Descrição'} />
                <TextField label={'Duração em dias'} type={'number'} />
                <Button type={'submit'}>Enviar</Button>
            </CreationTripForm>
        </div>
    )
}

export default CreationTripPage;
