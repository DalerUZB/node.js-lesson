import https from 'https'

import { TOKEN_DICTIONARY, getKeyValue } from './storage.servise.js'
import axios from 'axios'
const token = await getKeyValue(TOKEN_DICTIONARY.token)
const getWeather = async (city) => {
    if (!token) {
        throw new Error('API does`nt exist, -t [API_KEY] for saving token')
    }
    const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'en',
            units: 'metric'
        }
    })

    console.log(data);
    console.log(data.name);
}
export { getWeather }