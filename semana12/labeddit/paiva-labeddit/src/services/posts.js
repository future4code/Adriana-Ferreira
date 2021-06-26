import axios from 'axios'
import { Url } from '../constants/urls'

export const body = {
    "title": "Primeiro",
    "body": "post"
}

export const createPost = (body, clear, setIsLoading) => {
    setIsLoading(true)
    axios.post(`${Url}/posts`, body, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
        }
    })
        .then((res) => {
            alert(res.data.message)
            clear()
            setIsLoading(false)
        })
        .catch((err) => {
            alert(err.response.message)
            setIsLoading(false)
        })
}