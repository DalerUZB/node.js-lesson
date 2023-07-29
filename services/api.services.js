import https from 'https'

import { TOKEN_DICTIONARY, getKeyValue } from './storage.servise.js'
const token = getKeyValue(TOKEN_DICTIONARY.token)

const getWeather = async (city) => {
    if (!token) {
        throw new Error('API does`nt exist, -t [API_KEY] for saving token')
    }
    const url = new URL('https://api.openweathermap.org/data/2.5/weather/')
    url.searchParams.append('q', city)
    url.searchParams.append('appid', token)
    url.searchParams.append('lang', 'en')
    url.searchParams.append('units', 'metric')

    https.get('url', (response) => {
        console.log(response);
        let res = ''
        response.on('data', (chunk) => {
            res += chunk
        })
        response.on('end', () => {
            console.log(res);
        })
    })
}
getWeather('uzbekistan')
export { getWeather }