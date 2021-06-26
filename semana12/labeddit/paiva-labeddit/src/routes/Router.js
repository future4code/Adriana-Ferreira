import React from 'react'
import { Switch, Route } from 'react-router-dom'
import LoginPage from '../pages/LoginPage/LoginPage'
import RegisterPage from '../pages/RegisterPage/RegisterPage'
import FeedPage from '../pages/FeedPage/FeedPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Router = ({ setRightButtonText }) => {
    return (
        <Switch>
            <Route exact path='/login'>
                <LoginPage setRightButtonText={setRightButtonText} />
            </Route>
            <Route exact path='/cadastro'>
                <RegisterPage setRightButtonText={setRightButtonText} />
            </Route>
            <Route exact path='/' >
                <FeedPage />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>

    )
}

export default Router;

