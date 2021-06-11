import axios from 'axios'
import getCoords from '../api/coords-api'

const DAILY_URL = 'https://api.openweathermap.org/data/2.5/weather'
const DAYS_URL = 'https://api.openweathermap.org/data/2.5/forecast'
const ICON_SRC = 'https://openweathermap.org/img/wn/'
const PARAMS = { units: 'metric', appid: 'b643d1c36ef820780490b2d990f49c60'}

/* 
v= {
  lat: 37.65351,
  lon: 126.6256
}
axios return{~~~, data(실제 데이터)}
*/

export default async (url, v) => {
  try {
    const params = v ? {...PARAMS, ...v} : {...PARAMS, ...await getCoords()}
    const {data} = await axios.get(url === 'daily' ? DAILY_URL : DAYS_URL, { params })
    return data
  }
  catch(err) {
    console.log(err)
  }

}