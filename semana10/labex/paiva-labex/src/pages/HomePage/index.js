import React from 'react';
import Typography from '@material-ui/core/Typography';

export const HomePage = () => {
    return (
        <div>
            <Link to={'/login'}>
                <Button>Login</Button>
            </Link>
            <Typography variant='h2'>LabeX</Typography>
            <Typography variant='h3'>EXPLORE O UNIVERSO</Typography>
            <Link to={'/admin'}>
                <Button color={'primary'}>Viagens</Button>
            </Link>
        </div>
    )
}
