const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

router.get('/weather/:city', async (req, res) => {
    try {
        const city = req.params.city;
        const weatherData = await weatherController.getWeatherByCity(city);

        if (weatherData.error) {
            return res.status(500).json({ error: weatherData.error });
        }

        res.json({
            city: weatherData.city,
            country: weatherData.country,
            temperature: weatherData.temperature,
            humidity: weatherData.humidity,
            wind_speed: weatherData.wind_speed,
            weather_description: weatherData.weather_description,
            pressure: weatherData.pressure,
            observation_time: weatherData.observation_time
        });
    } catch (error) {
        res.status(500).json({ error: "An internal server error occurred." });
    }
});

module.exports = router;
