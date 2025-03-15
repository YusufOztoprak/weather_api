require('dotenv').config();
const axios = require('axios');

const API_URL = process.env.WEATHERSTACK_API_URL;
const API_KEY = process.env.WEATHERSTACK_API_KEY;

// Ensure API credentials are loaded
if (!API_URL || !API_KEY) {
    throw new Error("API_URL or API_KEY is missing! Please check your .env file.");
}

const validateCityName = (city) => {
    if (!city || typeof city !== 'string' || city.trim() === '') {
        return { error: "Invalid city name. Please enter valid city name." };
    }
    return null;
}

const getWeatherByCity = async (city) => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                access_key: API_KEY,
                query: city,
            }
        });
        require('dotenv').config();
        const axios = require('axios');

        const API_URL = process.env.WEATHERSTACK_API_URL;
        const API_KEY = process.env.WEATHERSTACK_API_KEY;

// Ensure API credentials are loaded
        if (!API_URL || !API_KEY) {
            throw new Error("API_URL or API_KEY is missing! Please check your .env file.");
        }



        const getWeatherByCity = async (city) => {
            try {
                const response = await axios.get(API_URL, {
                    params: {
                        access_key: API_KEY,
                        query: city,
                    }
                });

                const data = response.data;

                // Check if the API returned an error
                if (data.error) {
                    console.error(`API Error: ${data.error.info}`);
                    return { error: `Weather API error: ${data.error.info}` };
                }

                return {
                    city: data.location.name,
                    country: data.location.country,
                    temperature: `${data.current.temperature}°C`,
                    humidity: `${data.current.humidity}%`,
                    wind_speed: `${data.current.wind_speed} km/h`,
                    weather_description: data.current.weather_descriptions.join(', '),
                    pressure: `${data.current.pressure} hPa`,
                    observation_time: data.current.observation_time,
                };

            } catch (error) {
                console.error("Error:", error.message);
                return { error: "Failed to fetch weather data: " + error.message };
            }
        };

// Test the function with "London"
        getWeatherByCity('London').then(weatherData => {
            console.log(JSON.stringify(weatherData, null, 2));
        });

        const data = response.data;

        // Check if the API returned an error
        if (data.error) {
            console.error(`API Error: ${data.error.info}`);
            return { error: `Weather API error: ${data.error.info}` };
        }

        return {
            city: data.location.name,
            country: data.location.country,
            temperature: `${data.current.temperature}°C`,
            humidity: `${data.current.humidity}%`,
            wind_speed: `${data.current.wind_speed} km/h`,
            weather_description: data.current.weather_descriptions.join(', '),
            pressure: `${data.current.pressure} hPa`,
            observation_time: data.current.observation_time,
        };

    } catch (error) {
        console.error("Error:", error.message);
        return { error: "Failed to fetch weather data: " + error.message };
    }
};

getWeatherByCity('').then(weatherData => {
    console.log(JSON.stringify(weatherData, null, 2));
});

// Test the function with "London"
getWeatherByCity('London').then(weatherData => {
    console.log(JSON.stringify(weatherData, null, 2));
});

