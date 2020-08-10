import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '3c5c33d4640921eb2db5d4cfeba9cd1e';

export const fetchWeather = async(query) => {
  const {data} = await axios.get(URL, {
    params: {
      q: query,
      units: '',
      APPID: API_KEY
    }
  })

  return data
}