import React, { useState } from 'react'
import { AppBar, Toolbar, IconButton, Typography, InputBase, Button } from '@material-ui/core'
import { fade, makeStyles } from '@material-ui/core/styles'
import { useHistory } from 'react-router-dom'
import { goToLoginPage, goToFeedPage } from '../../routes/coordinator'
import SearchIcon from '@material-ui/icons/Search'
import Logo from '../../assets/img/logo.png'
import { LogoImg } from './styles'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
        fontWeight: 'bold',
        padding: 0,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '110ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
    button: {
        flexGrow: 1,
        fontWeight: 'bold',
        padding: 0,
    }
}));

const Header = ({ rightButtonText, setRightButtonText }) => {
    const token = localStorage.getItem('token')
    const history = useHistory()
    const classes = useStyles()

    const logout = () => {
        localStorage.removeItem('token')
    }

    const rightButtonAction = () => {
        if (token) {
            logout()
            setRightButtonText('Login')
            goToLoginPage(history)
        } else {
            goToLoginPage(history)
        }
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={() => goToFeedPage(history)}>
                        <LogoImg src={Logo} alt='balão verde' />
                        <Typography className={classes.title} variant="h6" color={'secondary'} noWrap>
                            LabEddit!
                        </Typography>
                    </IconButton>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </div>
                    <IconButton onClick={rightButtonAction}>
                        <Typography className={classes.title} variant="h6" color={'secondary'} noWrap>
                            {rightButtonText}
                        </Typography>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div >
    );
}

export default Header;