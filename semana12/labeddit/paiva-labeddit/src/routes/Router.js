import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'
import FeedPage from '../pages/FeedPage'
import ErrorPage from '../pages/ErrorPage'
import Header from '../components/Header'


const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/login'>
                    <LoginPage />
                </Route>
                <Route>
                    <RegisterPage exact path='/cadastro' />
                </Route>
                <Route>
                    <FeedPage exact path='/' />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;

