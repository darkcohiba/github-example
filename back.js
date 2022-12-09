const port = 8000
const express = require('express')
const cors = require('cors')
const axios = require('axios')
const OPEN_WEATHER_API_KEY = "96179e0143a6a7f7075bec3025df300f";
const IMDB_API_KEY = "k_viybmuj6";
const app = express()
// const city = require('./index.js')

app.use(cors())

app.get('/', (req, res) => {
    res.json(`hello`)
})

app.get('/openweather', (req, res) => {
    axios.request(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${OPEN_WEATHER_API_KEY}`)
    .then(response => res.json(response.data))
})

app.get('/top250movies', (req, res) => {
    axios.request(`https://imdb-api.com/en/API/Top250Movies/${IMDB_API_KEY}`)
    .then(response => res.json(response.data))
})

app.listen(8000, () => console.log(`backend is working ${port}`))