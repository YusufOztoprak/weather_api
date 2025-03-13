require('dotenv').config();

const axios = require('axios');

const API_URL = process.env.WEATHERSTACK_API_URL;
const API_KEY = process.env.WEATHERSTACK_API_KEY;

console.log('Loaded API URL:', API_URL);
console.log('Loaded API KEY:', API_KEY);

const getWeatherByCity = async (city) => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                access_key: API_KEY,
                query: city,
            }
        });

        const data = response.data;

        if (data.success === false) {
            console.log('Error: ' + data.error.info);
            return;
        }

        const weatherData = {
            city: city,
            temperature:`${data.current.temperature}°C`,
            humidity:`${data.current.humidity}%`,
            wind_speed:`${data.current.wind_speed} km/h`,
            weather_description: data.current.weather_descriptions.join(', '),
            pressure: `${data.current.pressure} hPa`,
            observation_time: `${data.current.observation_time}`,
        };

            return weatherData;

        } catch (error) {

        return {
            error: "Error fetching weather data: " +error.message
        };
    }
};


getWeatherByCity('London').then(weatherData => {
    console.log(JSON.stringify(weatherData, null, 2));
});
