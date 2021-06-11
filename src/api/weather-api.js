import axios from 'axios'

const DAILY_URL = 'https://api.openweathermap.org/data/2.5/weather'
const DAYS_URL = 'https://api.openweathermap.org/data/2.5/forecast'
const ICON_SRC = 'https://openweathermap.org/img/wn/10d@2x.png'
const params = { units: 'metric', appid: 'b643d1c36ef820780490b2d990f49c60'}

const getWeather = async () => {
	await axios.get()
}