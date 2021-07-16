import express, { Express } from 'express'
import cors from 'cors'

export const app: Express = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.send('Hello!')
})

app.listen(3003, () => {
    console.log("server ready")
})