import { app } from './app'
import { editCountry } from './endpoints/editCountry'
import { getAllCountries } from './endpoints/getAllCountries'
import { getCountryById } from './endpoints/getCountryById'
import { searchCountries } from './endpoints/searchCountries'

app.get('/countries', getAllCountries)
app.get('/countries/:id', getCountryById)
app.get('/countries/search', searchCountries)
app.post("/countries/:id", editCountry)