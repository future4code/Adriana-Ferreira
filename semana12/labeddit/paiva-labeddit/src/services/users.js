import { Url, axiosConfig } from '../constants/urls'
import axios from 'axios'
import { goToFeedPage } from '../routes/coordinator'

export const login = (body, clear, history, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${Url}/users/login`, body, axiosConfig)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            clear()
            setIsLoading(false)
            goToFeedPage(history)
            setRightButtonText('Logout')
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.response.data.message)
        })
}

export const register = (body, clear, history, setRightButtonText, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${Url}/users/signup`, body, axiosConfig)
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            clear()
            setIsLoading(false)
            goToFeedPage(history)
            setRightButtonText('Logout')
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err.response.data.message)
        })
}